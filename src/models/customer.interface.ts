export interface DriverI {
    driving_license: string;
    email: string;
    identification_document: string;
    identification_number: string;
    [location: number]: { latitude: number; longitude: number };     
    location_date: Date;
    mobile_phone: string;
    names: string;
    profile_picture: string;
    registration_date: string;
    status: string;
    status_driving_license: number;
    status_identification_document: number;
    status_profile_picture: number;
    surnames: string;
    token: string;
    user_blocking: boolean;

  }