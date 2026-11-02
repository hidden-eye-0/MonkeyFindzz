import { ExternalLink } from 'lucide-react';

interface AmazonButtonProps {
  url: string;
  label?: string;
}

export default function AmazonButton({
  url,
  label = 'View on Amazon',
}: AmazonButtonProps) {
  const href =
    url === 'YOUR_AMAZON_AFFILIATE_LINK_HERE'
      ? 'https://www.amazon.in/'
      : url;

  return (
    <a
      className="btn btn-primary w-full"
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
    >
      {label}
      <ExternalLink size={16} />
    </a>
  );
}
