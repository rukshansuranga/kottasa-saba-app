// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.


export type Project = {
  project_id: number;
  name: string;
  title: string;
  proposedDate: string;
  proposedBy: number;
  secondedBy: number;
  status: 'deactive' | 'active';
  proposed_project_session_id: number;
}


export type projectTable = {
  project_id: string;
  name: string;
  title: string;
  proposedDate: string;
  proposedBy: number;
  secondedBy: number;
  status: 'deactive' | 'active';
  proposed_project_session_id: number;
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};


export type ProjectForm = {
  project_id: string;
  name: string;
  title: string | null;
  proposedDate: Date;
  proposedBy: string;
  secondedBy: string;
  //status: 'deactive' | 'active' | null;
  status: string | null;
  proposed_session_id: string;
};