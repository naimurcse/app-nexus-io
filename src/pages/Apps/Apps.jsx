import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
const Apps = () => {
  const apps = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-[80px]">
      <div className="grid grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
