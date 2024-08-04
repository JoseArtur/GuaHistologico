// AnotherComponent.tsx

import Page from '../../../components/Carousel';
export default function OrgaosPage({ params }: { params: { p: string } }) {
    return (
        <div>
          <Page params={params} />
        </div>
      );
}
