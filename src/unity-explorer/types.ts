
export interface IField {
    name: string;
}

export class ValueField implements IField{
    name = "";
    value = "";
    position = 0;
}

export class ObjectField implements IField {
    name = "";
    values: ValueField[] = [];
}

export class SubField implements IField{
    isArray = false;
    name = "";
    fields: IField[] = [];
}

export class UnityElement {
    position = 0;
    typeID = 0;
    fileID = "";
    name = "";
    fields: IField[] = [];
}

export interface IFile {
    element: UnityElement;
    fileID: string;

}

export class GameObject implements IFile {
    fileID: string;
    element: UnityElement;
    transformID: string = "0";
    componentsID: string[] = [];
    name: string = "ERROR (Unnamed)";

    constructor(element: UnityElement) {
        this.element = element;
        this.fileID = element.fileID;
        element.fields.forEach(f => {
            if (f.name === "m_Name") {
                this.name = (f as ValueField).value;
            }
        });
    }
}

export class Component implements IFile {
    fileID: string;
    element: UnityElement;
    gameobjectID: string = "0";

    constructor(element: UnityElement) {
        this.element = element;
        this.fileID = element.fileID;
    }
}

export class Transform extends Component {
    fatherID: string = "0";
    childrenID: string[] = [];
    gameobjectName: string = "";
}

export class TreeTransform {
    fileID: string;
    gameobjectName: string = "";
    children: TreeTransform[] = [];
    father?: TreeTransform;
    isSelected = false;
    isOpen = false;

    constructor (id: string, name: string, father?: TreeTransform) {
        this.gameobjectName = name;
        this.father = father;
        this.fileID = id;
    }

    select() {
        let tt = this as TreeTransform;
        while (tt.father) {
            tt = tt.father;
        }
        
        this.unSelectAll(tt);
        this.isSelected = true;
    }

    private unSelectAll(tt: TreeTransform) {
        tt.isSelected = false;
        tt.children.forEach( ttc => {
            this.unSelectAll(ttc);
        })
    }
}
