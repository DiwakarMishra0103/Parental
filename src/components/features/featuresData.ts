
import { Clock, ShieldCheck, Smartphone, MapPin } from "lucide-react";
import { ScreenTimeVisualization } from "./ScreenTimeVisualization";
import { ContentFilteringVisualization } from "./ContentFilteringVisualization";
import { AppMonitoringVisualization } from "./AppMonitoringVisualization";
import { LocationTrackingVisualization } from "./LocationTrackingVisualization";

export type Feature = {
  id: string;
  iconComponent: typeof Clock | typeof ShieldCheck | typeof Smartphone | typeof MapPin;
  title: string;
  color: string;
  colorClass: string;
  visualComponent: React.ComponentType;
  contentTitle: string;
  items: string[];
};

export const featuresData: Feature[] = [
  {
    id: "screen-time",
    iconComponent: Clock,
    title: "Screen Time Management",
    color: "woof-blue",
    colorClass: "text-woof-blue",
    visualComponent: ScreenTimeVisualization,
    contentTitle: "Healthy Digital Boundaries",
    items: [
      "Set daily screen time limits to encourage balanced activities",
      "Schedule device-free times for meals, homework, and bedtime",
      "Create custom schedules for school days vs. weekends",
      "Remotely pause device access for immediate family time"
    ]
  },
  {
    id: "content-filtering",
    iconComponent: ShieldCheck,
    title: "Content Filtering",
    color: "woof-purple",
    colorClass: "text-woof-purple",
    visualComponent: ContentFilteringVisualization,
    contentTitle: "Protection from Harmful Content",
    items: [
      "Block inappropriate websites and content automatically",
      "Filter content by age-appropriate categories",
      "Get alerts when harmful content is detected",
      "Safe search enforcement across browsers and apps"
    ]
  },
  {
    id: "app-monitoring",
    iconComponent: Smartphone,
    title: "App Monitoring",
    color: "woof-orange",
    colorClass: "text-woof-orange",
    visualComponent: AppMonitoringVisualization,
    contentTitle: "App Usage Insights",
    items: [
      "See which apps your child uses and for how long",
      "Block inappropriate apps or set time limits per app",
      "Monitor messaging apps for concerning behavior",
      "Get weekly reports on digital habits and trends"
    ]
  },
  {
    id: "location-tracking",
    iconComponent: MapPin,
    title: "Location Tracking",
    color: "woof-green",
    colorClass: "text-woof-green",
    visualComponent: LocationTrackingVisualization,
    contentTitle: "Real-time Location Safety",
    items: [
      "Know where your children are in real-time",
      "Receive alerts when they arrive at or leave locations",
      "Set up safety zones and get notifications when boundaries are crossed",
      "View location history to ensure they're where they should be"
    ]
  }
];
