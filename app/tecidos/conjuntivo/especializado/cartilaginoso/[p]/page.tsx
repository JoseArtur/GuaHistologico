// AnotherComponent.tsx

import Page from '../../../../../components/Carousel';
export default function CartilaginosoPage({ params }: { params: { p: string } }) {
    return (
        <div>
          <Page params={params} />
        </div>
      );
}
