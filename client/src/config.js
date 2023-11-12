import { ROUTER } from "./router/router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const navConfig = [
  { id: 1, title: "Գլխավոր", link: ROUTER.HOME_PAGE_ROUTE },
  { id: 2, title: "Մեր Մասին", link: ROUTER.HOME_PAGE_ROUTE },
  { id: 3, title: "Կապ", link: ROUTER.HOME_PAGE_ROUTE },
  { id: 4, title: "Նորույթ", link: ROUTER.HOME_PAGE_ROUTE },
];

export const sectionsDataConfig = [
  {
    id: 1,
    title: "Անշարժ գույք",
  },

  {
    id: 2,
    title: "Տրանսպորտ",
  },

  {
    id: 3,
    title: "Էլեկտրոնիկա",
  },

  {
    id: 4,
    title: "Տուն և Այգի",
  },
];

// FOOTER

export const footerInfoConfig = {
  title: "Տեղեկատվություն",
  list: [
    {
      id: 1,
      title: "Գաղտնիության քաղաքականություն",
    },

    {
      id: 2,
      title: "Ընդհանուր դրույթներ և պայմաններ",
    },
  ],
};

export const footerMyPageConfig = {
  title: "Իմ Էջը",
  list: [
    {
      id: 1,
      title: "Մուտք",
    },

    {
      id: 2,
      title: "Պատվերների պատմություն",
    },

    {
      id: 3,
      title: "Նախընտրածները",
    },

    {
      id: 4,
      title: "Դիտել զամբյուղը",
    },
  ],
};

export const footerProductTagsConfig = {
  title: "Ապրանքի Տեգեր",
  list: [
    {
      id: 1,
      title: "Նոր",
    },

    {
      id: 2,
      title: "Լավագույն",
    },

    {
      id: 3,
      title: "Զեխչ",
    },

    {
      id: 4,
      title: "Բրենդ",
    },
  ],
};

export const footerFollowUsConfig = {
  title: "Հետևեք Մեզ",
  list: [
    {
      id: 1,
      title: "Մեր Մասին",
    },

    {
      id: 2,
      title: "Կապ",
    },
  ],
  icons: [
    {
      id: 1,
      icon: <FaFacebookF/>,
      link: "/",
    },
    {
      id: 2,
      icon: <FaInstagram/>,
      link: "/",
    },
  ],
};
//top-content

export const upperPartConfig = [
  {
    id: 1,
    name: "English",
  },

  {
    id: 2,
    name: "Русскй",
  },
];

//bottom section

export const bottomSectionConfig = [
  {
    id: 1,
    image: "/arca.png",
  },

  {
    id: 2,
    image: "/visa.png",
  },

  {
    id: 3,
    image: "/mastercard.png",
  },

  {
    id: 4,
    image: "/edram.png",
  },

  {
    id: 5,
    image: "/mobi.png",
  },
];
