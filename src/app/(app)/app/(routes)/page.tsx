import {
  PresentationControls,
  PresentationHeader,
  PresentationInput,
  PresentationMode,
  RecentPresentations,
  SuggestionPresentations,
} from "@/components/app";

export default function AppPage() {
  return (
    <div className="app-page">
      <PresentationHeader />
      <PresentationMode />
      <PresentationInput />
      <PresentationControls />
      <RecentPresentations />
      <SuggestionPresentations />
    </div>
  );
}
