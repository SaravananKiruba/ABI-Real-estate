// Type Definitions for ABI Real Estate CRM

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  alternatePhone?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  panNumber?: string;
  aadharNumber?: string;
  priority: 'low' | 'medium' | 'high' | 'vip';
  stage: 'prospect' | 'verified' | 'negotiation' | 'booked' | 'closed';
  source: string;
  assignedTo: string;
  budget: number;
  preferredLocations: string[];
  propertyType: string[];
  tags: string[];
  kycDocuments: Document[];
  createdAt: Date;
  updatedAt: Date;
  lastContactDate?: Date;
  nextFollowUp?: Date;
  communicationFrequency: 'daily' | 'weekly' | 'bi-weekly' | 'monthly';
  totalInteractions: number;
  dealValue?: number;
}

export interface ClientInteraction {
  id: string;
  clientId: string;
  type: 'call' | 'visit' | 'email' | 'whatsapp' | 'sms' | 'meeting';
  subject: string;
  description: string;
  outcome: string;
  nextAction?: string;
  nextFollowUpDate?: Date;
  duration?: number;
  attendedBy: string;
  location?: string;
  geoLocation?: { lat: number; lng: number };
  attachments?: string[];
  createdAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: 'website' | 'facebook' | 'google' | 'referral' | 'walk-in' | 'portal' | 'instagram' | 'other';
  budget: number;
  propertyType: string;
  location: string;
  status: 'new' | 'contacted' | 'qualified' | 'negotiation' | 'converted' | 'lost';
  assignedTo?: string;
  score: number;
  priority: 'low' | 'medium' | 'high';
  notes: string;
  lastContactDate?: Date;
  nextFollowUp?: Date;
  lostReason?: string;
  campaignId?: string;
  utmSource?: string;
  utmMedium?: string;
  createdAt: Date;
  convertedAt?: Date;
  convertedToClientId?: string;
}

export interface Appointment {
  id: string;
  title: string;
  clientId: string;
  clientName: string;
  type: 'site-visit' | 'office-meeting' | 'virtual-meeting' | 'property-viewing' | 'documentation';
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  geoLocation?: { lat: number; lng: number };
  assignedTo: string[];
  status: 'scheduled' | 'confirmed' | 'completed' | 'rescheduled' | 'cancelled' | 'no-show';
  outcome?: string;
  meetingNotes?: string;
  nextFollowUp?: Date;
  reminders: {
    sent: boolean;
    sentAt?: Date;
    type: 'sms' | 'whatsapp' | 'email';
  }[];
  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Quotation {
  id: string;
  quotationNumber: string;
  clientId: string;
  clientName: string;
  projectName: string;
  propertyType: string;
  propertyDetails: {
    area: number;
    unit: string;
    location: string;
    tower?: string;
    floor?: string;
    unitNumber?: string;
  };
  basePrice: number;
  additionalCharges: {
    name: string;
    amount: number;
  }[];
  discount: number;
  subtotal: number;
  gst: number;
  stampDuty: number;
  registrationCharges: number;
  totalAmount: number;
  status: 'draft' | 'sent' | 'viewed' | 'approved' | 'rejected' | 'expired' | 'converted';
  version: number;
  validUntil: Date;
  templateId?: string;
  paymentSchedule: {
    milestone: string;
    percentage: number;
    amount: number;
    dueDate: Date;
  }[];
  termsAndConditions: string;
  notes?: string;
  createdBy: string;
  sentAt?: Date;
  viewedAt?: Date;
  approvedAt?: Date;
  convertedToInvoiceId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  projectName: string;
  quotationId?: string;
  milestone: string;
  amount: number;
  gst: number;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  paymentMethod: 'cash' | 'cheque' | 'bank-transfer' | 'upi' | 'card' | 'emi';
  transactionId?: string;
  status: 'pending' | 'partial' | 'paid' | 'overdue' | 'cancelled';
  dueDate: Date;
  paidDate?: Date;
  interestApplicable: boolean;
  interestRate?: number;
  penaltyAmount?: number;
  remindersSent: number;
  lastReminderDate?: Date;
  nextReminderDate?: Date;
  tdsAmount?: number;
  paymentGateway?: 'razorpay' | 'paytm' | 'phonepe';
  receiptUrl?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Expense {
  id: string;
  category: 'marketing' | 'salary' | 'office' | 'utilities' | 'commission' | 'legal' | 'maintenance' | 'other';
  subcategory: string;
  description: string;
  amount: number;
  gst?: number;
  vendor?: string;
  invoiceNumber?: string;
  paymentMethod: string;
  paymentDate: Date;
  projectId?: string;
  approvedBy?: string;
  status: 'pending' | 'approved' | 'paid' | 'rejected';
  attachments?: string[];
  createdBy: string;
  createdAt: Date;
}

export interface Attendance {
  id: string;
  employeeId: string;
  employeeName: string;
  date: Date;
  checkIn?: Date;
  checkOut?: Date;
  workingHours?: number;
  status: 'present' | 'absent' | 'half-day' | 'leave' | 'holiday' | 'week-off';
  lateBy?: number;
  earlyBy?: number;
  location?: string;
  geoLocation?: { lat: number; lng: number };
  notes?: string;
  approvedBy?: string;
  createdAt: Date;
}

export interface Leave {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: 'casual' | 'sick' | 'earned' | 'unpaid' | 'maternity' | 'paternity';
  startDate: Date;
  endDate: Date;
  totalDays: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approverComments?: string;
  appliedAt: Date;
  processedAt?: Date;
}

export interface Document {
  id: string;
  name: string;
  type: 'kyc' | 'agreement' | 'invoice' | 'receipt' | 'legal' | 'property-doc' | 'id-proof' | 'other';
  format: string;
  size: number;
  url: string;
  cloudUrl?: string;
  cloudProvider?: 'google-drive' | 'aws-s3' | 'local';
  entityType: 'client' | 'project' | 'employee' | 'vendor' | 'quotation' | 'payment';
  entityId: string;
  tags: string[];
  version: number;
  ocrText?: string;
  expiryDate?: Date;
  uploadedBy: string;
  accessLevel: 'public' | 'internal' | 'confidential';
  createdAt: Date;
  updatedAt: Date;
}

export interface Employee {
  id: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'admin' | 'manager' | 'sales' | 'hr' | 'finance' | 'support';
  department: string;
  designation: string;
  joiningDate: Date;
  status: 'active' | 'inactive' | 'on-leave';
  reportingTo?: string;
  salary: number;
  avatar?: string;
}

export interface Analytics {
  totalLeads: number;
  convertedLeads: number;
  conversionRate: number;
  totalRevenue: string;
  collectedRevenue: string;
  pendingRevenue: string;
  overduePayments: number;
  activeClients: number;
  totalProjects: number;
  avgDealValue: number;
  topSalesPerson: {
    name: string;
    deals: number;
    revenue: number;
  };
  leadSourceBreakdown: {
    source: string;
    count: number;
    conversion: number;
  }[];
  monthlyRevenue: {
    month: string;
    revenue: number;
    collections: number;
  }[];
  salesPipeline: {
    stage: string;
    count: number;
    value: number;
  }[];
}

export interface Notification {
  id: string;
  type: 'lead' | 'appointment' | 'payment' | 'task' | 'system';
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}
