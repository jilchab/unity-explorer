import { SSL_OP_NO_TLSv1_1 } from 'constants';
import {
    UnityElement,
    GameObject,
    Component,
    Transform,
    TreeTransform,
    ValueField,
    ObjectField,
    SubField,
} from './types'

class PreviewManager {
    gameobjects: GameObject[] = [];
    components: Component[] = [];
    transforms: Transform[] = [];
    tree: TreeTransform;
    elements: UnityElement[];


    constructor(elements: UnityElement[]) {
        this.elements = elements;
        this.tree = new TreeTransform("0", "Scene", undefined);
        this.Update()
    }

    private getFileID(field: ObjectField) {
        let fileID = ""
        field.values.forEach(v => {
            if (v.name === "fileID") {
                fileID = v.value;
            }
        });
        return fileID;
    }

    Update() {
        this.gameobjects = [];
        this.components = [];
        this.transforms = [];

        this.elements.forEach(element => {
            if (element.typeID === 1) {
                this.gameobjects.push(new GameObject(element)); 
            } else if (element.typeID === 4 || element.typeID === 224) {
                this.transforms.push(new Transform(element));
            } else {
                this.components.push( new Component(element));
            }
        });
    
        this.transforms.forEach(t => {
            t.element.fields.forEach(field => {
                if (field.name === "m_Father") {
                    t.fatherID = this.getFileID(field as ObjectField);
                } else if (field.name === "m_Children") {
                    (field as SubField).fields.forEach(f => {
                        t.childrenID.push(this.getFileID(f as ObjectField));
                    });
                } else if (field.name === "m_GameObject") {
                    t.gameobjectID = this.getFileID(field as ObjectField);
                }
            });
        });
    
        this.gameobjects.forEach(go => {
            this.transforms.forEach(t => {
                if (t.gameobjectID === go.element.fileID) {
                    go.transformID = t.element.fileID;
                    t.gameobjectID = go.fileID;
                    t.gameobjectName = go.name;
                } 
            })
        });
        
        this.tree = new TreeTransform("0", "Scene");
        this.tree.isOpen = true;
        this.buildTree(this.tree, "0");

    }

    buildTree = (fatherTT: TreeTransform, fatherID: string) => {
        this.transforms.forEach(t => {
            if (t.fatherID === fatherID) {
                let tt = new TreeTransform(t.fileID, t.gameobjectName, fatherTT);
                fatherTT.children.push(tt);
                if (t.childrenID.length > 0) {
                    this.buildTree(tt, t.fileID);
                }
            }
        });
    }
}

export default PreviewManager;
    