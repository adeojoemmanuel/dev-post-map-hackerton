// src/services/cityService.ts

export interface TrafficData {
    location: string;
    congestionLevel: string;
    lastUpdated: string;
  }
  
  export interface InfrastructureStatus {
    id: number;
    name: string;
    status: string; // e.g., 'Operational', 'Under Maintenance', 'Out of Service'
    lastChecked: string;
  }
  
  // Mock function to simulate fetching real-time traffic data
  export async function fetchRealTimeTraffic(): Promise<TrafficData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { location: 'Downtown', congestionLevel: 'High', lastUpdated: '2024-10-03 10:00 AM' },
          { location: 'Uptown', congestionLevel: 'Moderate', lastUpdated: '2024-10-03 10:00 AM' },
          { location: 'Midtown', congestionLevel: 'Low', lastUpdated: '2024-10-03 10:00 AM' },
        ]);
      }, 1000); // Simulate network delay
    });
  }
  
  // Mock function to simulate fetching infrastructure status data
  export async function fetchInfrastructureStatus(): Promise<InfrastructureStatus[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Water Supply', status: 'Operational', lastChecked: '2024-10-03 9:00 AM' },
          { id: 2, name: 'Electric Grid', status: 'Under Maintenance', lastChecked: '2024-10-03 8:30 AM' },
          { id: 3, name: 'Public Transportation', status: 'Operational', lastChecked: '2024-10-03 9:45 AM' },
        ]);
      }, 1000); // Simulate network delay
    });
  }
  