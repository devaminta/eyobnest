export interface IMenuItem {
    id: string;
    name: string;
    parentId?: string | null;
    parent?: IMenuItem | null;
    children?: IMenuItem[];
    actions?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
