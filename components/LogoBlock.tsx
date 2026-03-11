import Image from 'next/image';
import Link from 'next/link';

type LogoBlockProps = {
  light?: boolean;
  compact?: boolean;
};

export default function LogoBlock({ light = false, compact = false }: LogoBlockProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Hailey Powell Realty home page">
      {/* Replace /public/logo-primary.svg and /public/logo-light.svg with final Hailey Powell Realty logo assets. Keep matching filenames or update these paths. */}
      <Image
        src={light ? '/logo-light.svg' : '/logo-primary.svg'}
        alt="Hailey Powell Realty logo"
        width={compact ? 120 : 180}
        height={compact ? 40 : 56}
        priority
      />
    </Link>
  );
}
