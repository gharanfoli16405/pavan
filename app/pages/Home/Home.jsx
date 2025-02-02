// import DahsboardForm from "./compoents/DahsboardForm/_DahsboardForm";
import ProductDescription from "./compoents/ProductDescription";
import ServicesForm from "./compoents/ServicesForm";

export function meta({}) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3 border border-black">
          <ProductDescription />
        </div>
        <div className="col-span-12 lg:col-span-4 border border-black">
          <ServicesForm />
        </div>
        <div className="col-span-12 lg:col-span-5 border border-black">
          تمنی
        </div>
      </div>
    </>
  );
}
