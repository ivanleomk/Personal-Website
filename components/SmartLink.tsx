import Link from "next/link";

type SmartLinkProps = {
  link: any;
  url: string;
};

const SmartLink = ({ link, url }: SmartLinkProps) => {
  const regEx = /^http/;

  if (!regEx.test(url)) {
    return (
      <Link href={url}>
        <span>{link}</span>
      </Link>
    );
  }

  return <a href={url}>{link}</a>;
};

export default SmartLink;
