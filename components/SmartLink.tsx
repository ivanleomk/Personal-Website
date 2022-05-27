import Link from "next/link";
import { useRouter } from "next/router";

type SmartLinkProps = {
  link: any;
  url: string;
};

const SmartLink = ({ link, url }: SmartLinkProps) => {
  const regEx = /^http/;
  const router = useRouter();

  if (!regEx.test(url)) {
    return (
      <span
        className="mx-0.5 underline text-blue-300"
        onClick={() => router.push(url)}
      >
        <span>{link}</span>
      </span>
    );
  }

  return (
    <a className="mx-0.5 underline text-blue-300" href={url}>
      {link}
    </a>
  );
};

export default SmartLink;
