export interface rfcMain {
        Id: number;
        Title: string;
        Status: string;
        CreatedBy: number;
        CreationDate: string;
        MainDetails: rfcDetails;
}

export interface rfcDetails {
    DueDate: string;
    PlannedFinish: string;
    ClientCommunication: string;
    ChatterID: string;
    MonthlyChange: number;
    ResearchCycle: number;
    LeadConsultant: number;
    TechnicalConsultant: number;
    Sponsor: number;
    ProjectManager: number;
}