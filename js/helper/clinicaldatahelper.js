import * as clinicaldataTemplates from "./clinicaldatatemplates.js";
import * as ioHelper from "./iohelper.js";

class Subject {
    constructor(key, createdDate) {
        this.key = key;
        this.createdDate = createdDate;
    }
}

export class FormItemData {
    constructor(itemGroupOID, itemOID, value) {
        this.itemGroupOID = itemGroupOID;
        this.itemOID = itemOID;
        this.value = value;
    }
}

const $ = query => subjectData.querySelector(query);
const $$ = query => subjectData.querySelectorAll(query);

const fileNameSeparator = "__";

export const sortTypes = {
    ALPHANUMERICALLY: "Alphanumerical",
    CREATEDDATE: "Creation date"
}

let subjects = [];
let subject = null;
let subjectData = null;

function parseSubjectData(xmlString) {
    return new DOMParser().parseFromString(xmlString, "text/xml");
}

function getSerializedSubjectData() {
    return new XMLSerializer().serializeToString(subjectData);
}

export function loadSubjects() {
    for (let fileName of Object.keys(localStorage)) {
        if (fileName.split(fileNameSeparator).length > 1) subjects.push(fileNameToSubject(fileName));
    }
}

export function addSubject(subjectKey) {
    if (subjectKey.length == 0) {
        ioHelper.showWarning("Enter Subject Key", "Please enter a key for the subject first.");
        return;
    }

    if (subjects.map(subject => subject.key).includes(subjectKey)) {
        ioHelper.showWarning("Subject Key Existent", "The entered subject key already exists. Please enter another one.");
        return;
    }

    storeSubject();
    subjectData = clinicaldataTemplates.getSubjectData(subjectKey);
    subject = new Subject(subjectKey, new Date());
    subjects.push(subject);
    storeSubject();
}

export function getSubjectKeys(sortOrder) {
    if (sortOrder) sortSubjects(sortOrder);
    return subjects.map(subject => subject.key);
}

function sortSubjects(sortType) {
    switch(sortType) {
        case sortTypes.ALPHANUMERICALLY:
            subjects.sort((a, b) => a.key > b.key ? 1 : (a.key < b.key ? -1 : 0));
            break;
        case sortTypes.CREATEDDATE:
            subjects.sort((a, b) => a.createdDate > b.createdDate ? 1 : (a.createdDate < b.createdDate ? -1 : 0));
    }
}

export function loadSubject(subjectKey) {
    storeSubject();
    subject = subjects.find(subject => subject.key == subjectKey);
    subjectData = parseSubjectData(localStorage.getItem(subjectToFilename(subject)));
    console.log(subjectData);
}

export function storeSubject() {
    if (!subject) return;
    const fileName = subjectToFilename(subject);
    localStorage.setItem(fileName, getSerializedSubjectData());
}

export function clearSubject() {
    subject = null;
}

function fileNameToSubject(fileName) {
    return new Subject(fileName.split(fileNameSeparator)[0], new Date(parseInt(fileName.split(fileNameSeparator)[1])));
}

function subjectToFilename(subject) {
    return subject.key + fileNameSeparator + subject.createdDate.getTime();
}

export function saveSubjectFormData(studyEventOID, formOID, formData) {
    console.log(formData);
}
