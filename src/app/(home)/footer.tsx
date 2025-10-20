import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex border-t justify-between font-medium p-6">
      <div className="flex items-center gap-2">
        <p>Powered By : Kementrian Ekonomi Kreatif BEM UPJ</p>
      </div>
        <Image
          src="/ekraf.svg"
          alt="Logo"
          width={64}
          height={64}
          className="inline-block mr-2"
        />
    </footer>
  );
};
