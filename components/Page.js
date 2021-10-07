import DynamicComponent from './DynamicComponent'
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({blok}) => (
  <div {...sbEditable(blok)}>
    <main>
      {blok.body ? blok.body.map((blok) =>
        <DynamicComponent blok={blok} key={blok._uid} />
      ) : null}
    </main>
  </div>
)

export default Page
