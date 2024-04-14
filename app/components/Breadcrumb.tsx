// components/Breadcrumb.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const breadcrumb: React.FC = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<{ label: string; href: string }[]>([]);

  useEffect(() => {
    const pathSegments = router.asPath.split('/').filter((segment) => segment);
    const breadcrumbList: { label: string; href: string }[] = [];
    let path = '';

    for (const segment of pathSegments) {
      path += '/' + segment;
      breadcrumbList.push({ label: segment, href: path });
    }

    setBreadcrumbs(breadcrumbList);
  }, [router.asPath]);

  return (
    <div className="flex items-center space-x-2">
      {breadcrumbs.map(({ label, href }, index) => (
        <span key={href}>
          <Link href={href}>
            <a className={index === breadcrumbs.length - 1 ? 'font-bold' : 'underline'}>{label}</a>
          </Link>
          {index < breadcrumbs.length - 1 && <span className="mx-1">&rsaquo;</span>}
        </span>
      ))}
    </div>
  );
};

export default breadcrumb;
