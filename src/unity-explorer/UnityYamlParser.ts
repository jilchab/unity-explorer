import {
    UnityElement,
    ValueField,
    ObjectField,
    SubField,
    IField
} from './types'

class UnityYamlParser {

    static Parse(yaml: string) {
        const ELEMENT_HEADER = "--- !u!"

        let elements: UnityElement[] = [];
        let currentElement: UnityElement = new UnityElement;
        let currentField: ValueField | ObjectField | SubField = new ValueField;
        let currentFieldsArray: IField[] = [];
        let fieldsArrays: IField[][] = [];
        let lastIndent = 2;
        

        let position = yaml.indexOf(ELEMENT_HEADER);
        
        do {

            // IF NEW ELEMENT
            if (yaml.substr(position, ELEMENT_HEADER.length) === ELEMENT_HEADER) {

                currentElement = new UnityElement;
                currentElement.position = position;
                position += ELEMENT_HEADER.length;

                const typeIdStr = yaml.getNextValue(position);
                currentElement.typeID = parseInt(typeIdStr);
                position += typeIdStr.length + 2;
                
                currentElement.fileID = yaml.getNextValue(position);
                position += currentElement.fileID.length + 2;
                
                currentElement.name = yaml.getNextValue(position);
                position += currentElement.name.length + 2;

                fieldsArrays = [];
                lastIndent = 2;
                fieldsArrays.push(currentElement.fields);
                currentFieldsArray = currentElement.fields;
                elements.push(currentElement);
                position += 1;
                
            } else { // IF NEW FIELD
                let currentIndent = 0;
                while (yaml[position] === ' ' || yaml[position] === '-' ) {
                    currentIndent += 1;
                    position += 1;
                    if (currentField instanceof SubField) {
                        if (yaml[position] === '-') {
                            currentField.isArray = true;
                        }
                    }
                }

                if (currentIndent > lastIndent) {
                    if (currentField instanceof SubField) {
                        currentFieldsArray = currentField.fields;
                        fieldsArrays.push(currentFieldsArray);
                        lastIndent = currentIndent;
                    } else {
                        return null;
                    }
                } else {
                    while (lastIndent > currentIndent) {
                        fieldsArrays.pop();
                        lastIndent -= 2;
                    }
                    currentFieldsArray = fieldsArrays[fieldsArrays.length - 1];
                }
                
                    
                const fieldName = yaml.getNextValue(position);

                // In case of unnamed ObjectField
                if (fieldName === "") {
                    position -= 1;
                } else {
                    position += fieldName.length + 1;
                }
                
                // If line doesn't end with ':'
                if (yaml[position] === ' ') {
                    if (yaml[position + 1] === '{') {
                        // ObjectField with only ValueField in it
                        let objField = new ObjectField;
                        objField.name = fieldName;  
                        
                        // Each ValueField in ObjectField
                        do {
                            let valField = new ValueField;

                            position += 2;
                            
                            valField.name = yaml.getNextValue(position);
                            position += valField.name.length + ": ".length;
                            valField.position = position; 

                            valField.value = yaml.getNextValue(position);
                            position += valField.value.length;
                            objField.values.push(valField);
                        } while (yaml[position] != '}');
                        currentField = objField;
                        position += 3;
                    } else if (yaml[position + 1] === '[') {
                        // Empty ArrayField
                        currentField = new SubField;
                        currentField.name = fieldName;
                        currentField.isArray = true;
                        position += 5;
                    } else {
                        // ValueField
                        let valField = new ValueField;
                        position += 1;
                        valField.name = fieldName;
                        valField.position = position;

                        valField.value = yaml.getNextValue(position);
                        position += valField.value.length + 2;
                        currentField = valField;
                    }
                } else {
                    // SubField/ArrayField
                    currentField = new SubField;
                    currentField.name = fieldName;
                    position += 2;
                    
                }
                currentFieldsArray.push(currentField);
            }

        } while (position < yaml.length - 1);

        return elements;
    }
}

declare global {
    interface String {
        getNextValue(start?: number): string;
    }
}
    
String.prototype.getNextValue = function(start: number = 0) {
    const delimiters = ",;:!@#$%^&*(){}[] \r\n";
    const excpections = ", ";
    let end = start;

    while (!delimiters.includes(this[end])) {
        end += 1;
        if (excpections.includes(this[end]) && !delimiters.includes(this[end + 1])) {
            end += 1;
        }
    }
    return this.slice(start, end);
}

export default UnityYamlParser;