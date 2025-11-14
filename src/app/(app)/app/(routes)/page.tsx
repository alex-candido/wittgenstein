import {
  AppFormControls,
  AppFormHeader,
  AppFormInput,
  AppFormMode,
  AppRecents,
  AppSuggestions,
} from "@/components/app/root";

export default function AppPage() {
  return (
    <div className="app-page">
      <AppFormHeader />
      <AppFormMode />
      <AppFormInput />
      <AppFormControls />
      <AppRecents />
      <AppSuggestions />
    </div>
  );
}
