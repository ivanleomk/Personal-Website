import Link from "next/link";

type SmartLinkProps = {
  link: any;
  url: string;
};

const styling =
  "text-base font-medium rounded-md text-indigo-600 underline py-2 hover:bg-indigo-700";
const SmartLink = ({ link, url }: SmartLinkProps) => {
  const regEx = /^http/;

  console.log(regEx.test(url));

  if (!regEx.test(url)) {
    return (
      <Link href={url}>
        <span className={styling}>{link}</span>
      </Link>
    );
  }

  return (
    <a className={styling} href={url}>
      {link}
    </a>
  );
};

export default SmartLink;
