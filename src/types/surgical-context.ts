import { ReactNode } from "react";
import { SurgicalRequestData } from "./surgical-request-data";

export type SurgicalContextProps = {
    children: ReactNode;
};
 
export interface ContextProps {
    readonly surgicalRequestData: SurgicalRequestData[] | null;
    readonly setSurgicalRequestData: (
       surgicalRequestData: SurgicalRequestData[]
    ) => void;
    readonly loadSurgicalRequestData: () => Promise<void>;
    readonly createSurgicalRequest: (data: SurgicalRequestData) => Promise<void>;
    readonly deleteSurgicalRequest: (id?: number) => Promise<void>;
    readonly editSurgicalRequest: (data: SurgicalRequestData) => Promise<void>;
 }