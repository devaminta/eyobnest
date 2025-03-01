export interface IMenuItem {
    id: string;
    name: string;
    parentId?: string | null;
    parent?: any | null;
    children?: any[];
    actions?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
