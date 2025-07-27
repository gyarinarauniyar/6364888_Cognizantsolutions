class Cohort {
    constructor(cohortCode,
        startDate,
        technology,
        trainerName,
        coachName,
        currentStatus) {
        this.cohortCode = cohortCode;
        this.coachName = coachName;
        this.trainerName = trainerName;
        this.technology = technology;
        this.startDate = startDate;
        this.currentStatus = currentStatus;
    }
}
const CohortsData =[
    new Cohort('INTADMDF10','22-july-2025', '.NET FSD', 'Gyarina Rauniyar','Aathma', 'Scheduled'),
    new Cohort('ADM21JF014','10-Sep-2024', 'Java FSD', 'Ram Sharma','Apoorv', 'Ongoing'),
    new Cohort('CDBJF21025','24-Dec-2024', 'Java FSD', 'Shyam Rai','Aathma', 'Ongoing'),
    new Cohort('INTADMJF12','22-Feb-2025', 'Java FSD', 'To Be Assigned','Ibrahim', 'Scheduled'),
    new Cohort('CDE22JF011','24-Dec-2024', 'Java FSD', 'Sohail Alam','Apoorv', 'Ongoing'),
    new Cohort('INTADMDF09','22-Feb-2025', 'Dataware Housing', 'Sandip Sharma','Aathma', 'Scheduled'),
    new Cohort('ADM22DF001','10-Sep-2024', '.NET FSD', 'Bhavya Chettri','Ibrahim', 'Ongoing'),
];
export {Cohort, CohortsData};