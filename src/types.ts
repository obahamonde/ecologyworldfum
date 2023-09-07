export interface Lead {
  ref?: string;
  ts?: number;
  name: string;
  email: string;
}

export interface Message {
  role: string;
  content: string;
}

export interface Notification {
  status: "success" | "error" | "warning" | "info";
  message: string;
}

export interface TimeLineItem {
  title: string;
  comment: string;
  label: string;
  content: string;
}

