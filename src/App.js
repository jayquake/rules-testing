import React, { useState } from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/404errorpg";
import Index from "./routes/index";
import Rules from "./routes/Rules/Rules";
import Carousels from "./routes/Rules/Carousels/Carousels";
import CarouselsSlick from "./components/Carousels/Slick/CarouselsSlick.jsx";
//Keyboard Rules
import KeyboardLinks from "./routes/Rules/Keyboard/keyboardLinks";
//Non Interactive Tab Index
import NonInteractiveTabIndex from "./routes/Rules/Keyboard/Criteria/noninteractivetab";
import NoninteractiveTabindexSuccess from "./routes/Rules/Keyboard/Criteria/Success/noninteractive_success";
import NonInteractiveFailures from "./routes/Rules/Keyboard/Criteria/Failure/noninteractive_fail";
//BrokenTab
import BrokenTab from "./routes/Rules/Keyboard/Criteria/brokentab";
//FakeHiddenInteractive
import FakeHiddenInteractive from "./routes/Rules/Keyboard/Criteria/fakehiddeninteractive";
//SkipLinks
import SkipLinks from "./routes/Rules/Keyboard/Criteria/skiplinks";
//NoticeableFocus
import NoticeableFocus from "./routes/Rules/Keyboard/Criteria/noticablefocus";
//PopupFocus
import PopupFocus from "./routes/Rules/Keyboard/Criteria/popupfocus";
//ScrollFocus
import ScrollFocus from "./routes/Rules/Keyboard/Criteria/scrollfocus";
//KeyboardHoverables
import KeyboardHoverables from "./routes/Rules/Keyboard/Criteria/keyboardhoverables";
//EnterClickability
import EnterClickability from "./routes/Rules/Keyboard/Criteria/enterclickability";
//Form Rules
import Forms from "./routes/Rules/Forms/Forms";
import Clickables from "./routes/Rules/Clickables/Clickables";
import LinkContext from "./routes/Rules/Clickables/Criteria/linkcontext";

import Dashboard, {
  loader as rootLoader,
  action as rootAction
} from "./routes/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    state: {
      pageName: "Home"
    },
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/Rules",
        element: <Rules />,
        state: {
          pageName: "Rules"
        }
      },
      {
        path: "/Carousels",
        state: {
          pageName: "Carousels"
        },

        element: <Carousels />
      },
      {
        path: "/Carousels/Slick",
        pageName: "Slick Carousels",
        element: <CarouselsSlick />
      },
      {
        path: "/Keyboard",
        state: {
          pageName: "Keyboard"
        },

        element: <KeyboardLinks />
      },
      {
        path: "/Keyboard/NoninteractiveTabindex",
        state: {
          pageName: "Non Interactive Tab Index"
        },
        children: [
          { index: true, element: <NonInteractiveTabIndex /> },
          {
            path: "/Keyboard/NoninteractiveTabindex/Success",
            state: {
              pageName: "NonInteractive Tab Index: Success"
            },
            element: (
              <NoninteractiveTabindexSuccess></NoninteractiveTabindexSuccess>
            )
          },
          {
            path: "/Keyboard/NoninteractiveTabindex/Failures",
            state: {
              pageName: "NonInteractive Tab Index: Success"
            },
            element: <NonInteractiveFailures></NonInteractiveFailures>
          }
        ]
      },
      {
        path: "/Keyboard/BrokenTabIndex",
        state: {
          pageName: "Broken Tab Index"
        },

        element: <BrokenTab />
      },
      {
        path: "/Keyboard/SkipLinks",
        state: {
          pageName: "Skip Links"
        },

        element: <SkipLinks />
      },
      {
        path: "/Keyboard/NoticeableFocus",
        state: {
          pageName: "Noticeable Focus"
        },

        element: <NoticeableFocus />
      },
      {
        path: "/Keyboard/FakeHiddenInteractive",
        state: {
          pageName: "Fake Hidden Interactive"
        },

        element: <FakeHiddenInteractive />
      },
      {
        path: "/Keyboard/PopupFocus",
        state: {
          pageName: "Popup Focus"
        },

        element: <PopupFocus />
      },
      {
        path: "/Keyboard/KeyboardHoverables",
        state: {
          pageName: "Keyboard Hoverables"
        },

        element: <KeyboardHoverables />
      },
      {
        path: "/Keyboard/EnterClickability",
        state: {
          pageName: "Enter Clickablility"
        },

        element: <EnterClickability />
      },
      {
        path: "/Keyboard/ScrollFocus",
        state: {
          pageName: "Scroll Focus"
        },

        element: <ScrollFocus />
      },
      {
        path: "/Forms",
        state: {
          pageName: "Forms"
        },

        element: <Forms />
      },
      {
        path: "/Clickables",
        state: {
          pageName: "Clickables"
        },

        element: <Clickables />
      },
      {
        path: "/Clickables/LinkContext",
        state: {
          pageName: "Link Context"
        },

        element: <LinkContext />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
