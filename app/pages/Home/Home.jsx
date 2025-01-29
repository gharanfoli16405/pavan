import Lorem from "@components/Lorem";

export function meta({}) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="px-2">
        <div className="mb-8">
          <Lorem />
        </div>
        <div className="mb-8">
          <Lorem />
        </div>
        <div className="mb-8">
          <Lorem />
        </div>
        <div className="mb-8">
          <Lorem />
        </div>
      </div>
    </>
  );
}
