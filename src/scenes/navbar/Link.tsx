// import { SelectedPage } from "@/shared/types";
// import AnchorLink from "react-anchor-link-smooth-scroll"

// type Props = {
//   page: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void
// }

// function Link({
//   page,
//   selectedPage,
//   setSelectedPage,
// }: Props) {
//     const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
//   return (
//    <AnchorLink
//    className={`${selectedPage ===  lowerCasePage ? "text-primary-500" : ""}
//    transition duratioon-500 hove:text-primary-300
//    `}
//    href={`#${lowerCasePage}`}
//    onClick={() => setSelectedPage(lowerCasePage)}
//    >
//     {page}
//    </AnchorLink>
//   )
// }

// export default Link