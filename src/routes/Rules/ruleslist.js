const auditRules = [
  {
    _id: "62046deec839872ab00872e0",
    name: "Link Context",
    route: "link-context",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T01:42:35.000Z",
    modified: "2023-02-05T15:43:36.786Z",
    shortCode: "linkContext",
    severity: "high",
    criteria: "clickables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#link-purpose-in-context",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Links should indicate their functionality and destination to assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Visual cues on pages provide context to links or hint functionality to users with sight, even if the links aren't fully descriptive. Screen reader users need to know where a link will take them based on the anchor text without additional context.",
    issueResolution:
      "<p>Examples include links to the shopping cart, to the company's Facebook page, to the site's search page, or to other similar destinations.</p>\n<p>If the link's anchor text doesn't explicitly describe those destinations, add screen-reader only text describing the destination, as seen in the example below:</p>\n<pre class=\"language-markup\"><code>&lt;span class=\"sr-only\"&gt;Shopping Cart&lt;/span&gt;</code></pre>",
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "{suggestion}",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620570816199d73f9cf2aec8",
    name: "Font Sizes",
    route: "font-sizes",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T11:35:07.000Z",
    modified: "2022-03-27T18:49:26.276Z",
    shortCode: "fontSizes",
    severity: "medium",
    criteria: "readability",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C144#resize-text",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Font sizes should provide a readable experience",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Using small font sizes (usually 12 pixels or below) can be very difficult for certain vision impairments to interact with.",
    issueResolution:
      '<p>Do not use less than 12px font-sizes. Ideally, don\'t go lower than 14px.</p>\n<p>&nbsp;</p>\n<pre class="language-markup"><code>&lt;style&gt;\nbody * {\n    font-size: 15px;\n}\n&lt;/style&gt;</code></pre>',
    suggestedFix: []
  },

  {
    _id: "620572506199d73f9cf2aed1",
    name: "Empty Headings",
    route: "empty-headings",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:14:46.000Z",
    modified: "2022-03-27T18:52:21.349Z",
    shortCode: "emptyHeadings",
    severity: "high",
    criteria: "headings",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#headings-and-labels",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Empty headings should be excluded from assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen reader users use header navigation to skim through pages and quickly learn their topics. If empty headers exist, the header navigation feature breaks, and assistive technology users will find the page very difficult to browse.",
    issueResolution:
      "<p>Remove empty heading tags from your HTML, or add content to them.</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620573426199d73f9cf2aed4",
    name: "Nested Tables",
    route: "nested-tables",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:17:48.000Z",
    modified: "2022-03-27T18:53:30.173Z",
    shortCode: "nestedTables",
    severity: "medium",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Avoid using nested tables",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Nesting table within tables completely breaks the orientation of screen reader users. Assistive technology relies on matching column and row cells to announce table content to users, and if tables are nested, screen readers start to read random text.",
    issueResolution:
      '<p>If you\'ve nested tables to create specific layouts visually, but the parent table still functions as a regular table for information delivery, use role=presentation on the nested table to erase its accessibility table role. If the whole table structure is for layout purposes only and not for displaying information in a table, use role=presentation on both nested and parent tables.</p>\n<pre class="language-markup"><code>&lt;table&gt;\n    &lt;tbody&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;table role="presentation"&gt;&lt;/table&gt;\n            &lt;/td&gt;\n         &lt;tr&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620651e9b0b1184e88c8382a",
    name: "Empty List",
    route: "empty-list",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:08:41.000Z",
    modified: "2022-02-26T20:53:50.741Z",
    shortCode: "emptyList",
    severity: "low",
    criteria: "errors",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Lists without items or with a single item should lose the list role",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "An empty list will still be visible for screen reader users. It may frustrate and confuse users as to whether the list is actually empty or there is a screen-reader/accessibility issue that prevents their screen-reader from reading the list items.",
    issueResolution:
      '<p>Remove the empty HTML list tags (<strong>UL/OL</strong>) or give them <strong>aria-hidden=true to </strong>make screen-readers ignore them.</p>\n<pre class="language-markup"><code>&lt;ul aria-hidden="true"&gt;&lt;/ul&gt;\n&lt;ol aria-hidden="true"&gt;&lt;/ol&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-hidden",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620572b76199d73f9cf2aed2",
    name: "Untagged Headings",
    route: "untagged-headings",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:15:12.000Z",
    modified: "2022-03-27T18:52:57.370Z",
    shortCode: "untaggedHeadings",
    severity: "high",
    criteria: "headings",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Headings should be tagged or coded accordingly",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Text blocks that visually function as headings for sighted users should also be tagged as headings for screen reader users, even if they are not coded as native headers.",
    issueResolution:
      '<p>If you specifically coded headers without native header HTML tags (like H1, H2, etc.) for SEO reasons or otherwise, use <strong>role=heading</strong> and <strong>aria-level=1/2/3/4/5/6</strong> (the appropriate heading level) to determine a heading to screen readers. Alternatively, you can directly code those elements as native HTML headers.</p>\n<pre class="language-markup"><code>&lt;span role="heading" aria-level="3"&gt;This will be treated by screen readers like an H3 heading&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "heading",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-level",
        suggestedFixValue: "1/2/3...",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058a9f6199d73f9cf2aedd",
    name: "Iframe Labeling",
    route: "iframe-labeling",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:58:35.000Z",
    modified: "2022-02-25T21:27:47.735Z",
    shortCode: "iframeLabeling",
    severity: "medium",
    criteria: "context",
    WCAGLevel: "none",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Iframe elements should be labeled properly for assistive techonology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers treat iframes as an integral part of the web page. Iframes often provide a specific functionality like a form or a YouTube video. If Iframes are unlabeled, users can't choose whether to enter them or not and how they relate to the page.",
    issueResolution:
      '<p>Use the&nbsp;<strong>aria-label&nbsp;</strong>attribute to indicate the functionality of a given iframe like in the example below:</p>\n<pre class="language-markup"><code>&lt;iframe src="..." aria-label="YouTube tutorial video"&gt;&lt;/iframe&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206348facb7f0495c5df3a1",
    name: "Form Submissions Status",
    route: "form-submissions-status",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:02:37.000Z",
    modified: "2022-02-26T12:23:04.562Z",
    shortCode: "formSubmissionsStatus",
    severity: "high",
    criteria: "forms",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#status-messages",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Submission statuses (success/failure) should be indicated to assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users rely on status messages to automatically announce when a form is submitted. If status messages are not automatically announced, screen reader users will have to attempt to understand the status by browsing around picking clues.",
    issueResolution:
      '<p>Include the&nbsp;<strong>role=alert&nbsp;</strong>attributes on the success/failure message of your forms.</p>\n<p>Please note that the alert message should appear only once to announce the form status and not every field validation. Field validations should be handled separately.</p>\n<pre class="language-markup"><code>&lt;div role="alert"&gt;Thank you, we\'ll get back to you shortly.&lt;/div&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620652adb0b1184e88c8382c",
    name: "Enter Clickability",
    route: "enter-clickability",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:11:08.000Z",
    modified: "2022-02-27T12:26:45.500Z",
    shortCode: "enterClickability",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#keyboard-accessible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Interactive elements should be clickable using the Enter key",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Only links with an href attribute, buttons, and a handful of other, less usable tags can be triggered using the Enter key by default. If you've used different elements and added JS click events to them, those elements are not operable using the keyboard.",
    issueResolution:
      "<p>Add JavaScript to ensure that elements that are not clickable by default are clickable using the enter key. Alternatively, use native <strong>BUTTON </strong>and <strong>A</strong> HTML elements, which are keyboard clickable by default. Note that <strong>A</strong> tags (links) are only clickable if they include an <strong>HREF</strong> attribute.</p>\n<p>If you choose to go the JavaScript route, you can copy and paste the below, which will add that functionality to your website. However, make sure to include your clickable selectors where the <strong>\".your-clickable-selectors\"</strong> text appears.&nbsp;</p>\n<pre class=\"language-javascript\"><code>document.addEventListener('keydown', e =&gt; {\n    if( e.which !== 13 || ['BUTTON', 'A'].includes(e.target.tagName) || ! e.target.closest('.your-clickable-selectors') ) return;\n    e.target.click();\n})</code></pre>",
    suggestedFix: []
  },
  {
    _id: "6204715c00e72f4578e07365",
    name: "Button Roles",
    route: "button-roles",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T01:58:13.000Z",
    modified: "2022-03-27T17:25:43.093Z",
    shortCode: "buttonRoles",
    severity: "extreme",
    criteria: "clickables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Elements with button functionality should have proper roles",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers treat elements that function as buttons but aren't labeled as such, as blocks of text. This means that blind users won't know that those elements are interactive.",
    issueResolution:
      '<p>To indicate to a screen reader that an element is actually a button, we can either use the ARIA-role technique (adding <strong>role=button</strong>) as shown in the SPAN and DIV examples below or convert the element tag to a native button with a <strong>type=button </strong>attribute. If the button submits a form, the "<strong>type</strong>" attribute would be "<strong>submit</strong>".</p>\n<pre class="language-markup"><code>&lt;span role="button"&gt;I\'m a SPAN that functions like a button for screen readers&lt;/span&gt;\n&lt;div role="button"&gt;I\'m a DIV that functions like a button for screen readers&lt;/div&gt;\n&lt;button type="button"&gt;I\'m a NATIVE button&lt;/button&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "tag",
        suggestedFixKey: "",
        suggestedFixValue: "button",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "type",
        suggestedFixValue: "button",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620471f050ec392830b7e7ca",
    name: "New Window Links",
    route: "new-window-links",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T02:00:22.000Z",
    modified: "2022-03-27T17:26:01.122Z",
    shortCode: "newWindowLinks",
    severity: "medium",
    criteria: "clickables",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Links should indicate if they open a new tab to assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "By default, screen readers do not indicate if links will open a new window to users. When links unexpectedly open a new window, this often frustrates and disorientates a screen reader user.",
    issueResolution:
      '<p>Use the screen-reader-only technique to indicate to screen reader users when a link will open a new window.</p>\n<pre class="language-markup"><code>&lt;span class="sr-only"&gt;New Window&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "new window",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620571dd6199d73f9cf2aece",
    name: "Background Images",
    route: "background-images",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:10:54.000Z",
    modified: "2022-02-25T17:47:38.151Z",
    shortCode: "backgroundImages",
    severity: "medium",
    criteria: "graphics",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Non decorative Background images should be tagged and labeled",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Background images should receive alternative text just like regular images do unless used as decorative elements and do not provide any information or additional context to the users.",
    issueResolution:
      '<p>Use the&nbsp;<strong>screen-reader-only</strong> technique combined with the <strong>role=img</strong> and&nbsp;<strong>aria-label</strong> attributes to indicate to screen readers that there\'s an image and the description for that image. Make sure to include the embedded text of the image alongside the objects that comprise it in the <strong>aria-label </strong>description.</p>\n<p>Add The screen-ready-only element into the element with the background image like in the example below:</p>\n<pre class="language-markup"><code>&lt;div style="background-image: url(...)"&gt;&lt;span class="sr-only" role="img" aria-label="Shop Tennins gear. Two people playing professional tennis in a stadium with spectators."&gt;&lt;/span&gt;&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "Background Image description...",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620572096199d73f9cf2aecf",
    name: "Main Heading",
    route: "main-heading",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:13:17.000Z",
    modified: "2022-03-27T18:51:56.426Z",
    shortCode: "mainHeading",
    severity: "high",
    criteria: "headings",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#headings-and-labels",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "A descriptive main heading (H1) should exist on every page",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users rely on the main header (H1) tag to determine the topic of the page and the main content section. Pages without a main header are more difficult for assistive technology users to browse.",
    issueResolution:
      "<p>Include single, descriptive, visible H1 (main header) on every page. Make sure that the header is placed where the content section of the page starts, and that it provides enough information to determine the page's topic.</p>\n<pre class=\"language-markup\"><code>&lt;h1&gt;I'm a main heading...&lt;/h1&gt;</code></pre>",
    suggestedFix: []
  },

  {
    _id: "62058b0a6199d73f9cf2aee0",
    name: "Active Tab",
    route: "active-tab",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T22:00:01.000Z",
    modified: "2022-02-26T00:38:49.649Z",
    shortCode: "activeTab",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The active tab should be tagged as such for assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers require properly coded states for interactive elements. Tabs can have active and inactive states, and just like an active state usually is visually distinct, this should be indicated to screen reader users in the code.",
    issueResolution:
      "<p>Add the <strong>aria-selected=true</strong> to the active tab, alongside the&nbsp;<strong>role=tab</strong> to indicate that the element is indeed a tab. It's also essential to make sure to change the <strong>aria-selected=true</strong> to <strong>false </strong>when another tab becomes active (and that other tab should receive <strong>true</strong>).</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "tab",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-selected",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62064fe4807c385bb8e74a80",
    name: "Fake Hidden Content",
    route: "fake-hidden-content",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:59:59.000Z",
    modified: "2022-02-26T20:23:47.270Z",
    shortCode: "fakeHiddenContent",
    severity: "high",
    criteria: "errors",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Visually hidden content should be excluded from assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Hiding elements on screen using any other method than display=none or visibility=hidden still makes them available for screen readers and when they are not intended to be visible or available to anyone.",
    issueResolution:
      '<p>Add the&nbsp;<strong>aria-hidden=true</strong> attribute&nbsp;<strong>to the parent element</strong> of all the hidden content on the screen that isn\'t hidden using <strong>display=none or visibility=hidden.</strong> When this element becomes visible, for example, if it is a popup that has now appeared on screen, change the <strong>aria-hidden</strong> to&nbsp;<strong>false</strong>. And when it becomes hidden again, change the&nbsp;<strong>aria-hidden&nbsp;</strong>to&nbsp;<strong>true.</strong> The&nbsp;<strong>aria-hidden</strong> attribute should reflect the visibility state of such elements at all times.</p>\n<pre class="language-markup"><code>&lt;div class="hidden-parent" aria-hidden="true"&gt;\n    &lt;p&gt;Some content...&lt;/p&gt;\n    &lt;ul&gt;...&lt;/ul&gt;\n&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-hidden",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620653c2b0b1184e88c83833",
    name: "Broken Tabindex",
    route: "broken-tabindex",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:16:38.000Z",
    modified: "2022-02-27T17:10:55.599Z",
    shortCode: "brokenTabindex",
    severity: "high",
    criteria: "keyboard",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Tabindex values should not exceed 0",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Tabindex values should be 0 for navigable elements or -1 for non-navigable but focusable elements. Any tabindex value above 0 is strictly invalid and will prevent keyboard users from interacting with your website properly.",
    issueResolution:
      "<p>If the element should be navigable, give it&nbsp;<strong>tabindex=0.</strong> If you've provided tabindex above 0 because you try to control focus order, then reorder elements in your HTML, but in any case, do not use tabindex above 0.</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "tabindex",
        suggestedFixValue: "0",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058adf6199d73f9cf2aedf",
    name: "Incorrect Main Landmark",
    route: "incorrect-main-landmark",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:59:22.000Z",
    modified: "2022-02-25T21:36:15.024Z",
    shortCode: "incorrectMainLandmark",
    severity: "high",
    criteria: "context",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "The main landmark is different than the tagged one",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "The main content area should be where the content begins, often wrapping the page's main heading. However, it should not wrap the entire HTML code or be placed in the wrong location on the page (not directly where the content begins).",
    issueResolution:
      '<p>Reset the accessibility role of the inappropriate main area using the&nbsp;<strong>role=presentation&nbsp;</strong>attributes, or change the&nbsp;<strong>MAIN</strong> <strong>HTML&nbsp;</strong>tag to a <strong>DIV&nbsp;</strong>or a <strong>SECTION.</strong></p>\n<pre class="language-markup"><code>&lt;main role="presentation"&gt;&lt;/main&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206430ff3d7a95964d1879e",
    name: "Broken Submenu Indication",
    route: "broken-submenu-indication",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:04:31.000Z",
    modified: "2022-02-26T17:32:07.084Z",
    shortCode: "brokenSubmenuIndication",
    severity: "low",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Sub menu indication should only be on the nav item's link/button tag and should not exist if sub menu doesn't exist",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "The coded submenu indications should be placed on the link or button item and not on any other menu element like an LI. If a sub-menu does not exist, those indications should not exist. Otherwise, screen reader users will lose orientation using the menu.",
    issueResolution:
      "<p>Remove the&nbsp;<strong>aria-expanded&nbsp;</strong>and&nbsp;<strong>aria-haspopup</strong> from any element of the menu item that isn't the link <strong>(A tag)</strong> or the&nbsp;<strong>BUTTON&nbsp;</strong>tag. If the menu item doesn't have a sub menu, completely remove the&nbsp;<strong>aria-expanded&nbsp;</strong>and&nbsp;<strong>aria-haspopup&nbsp;</strong>from any of the menu item elements.</p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "aria-expanded",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "aria-haspopup",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620653e8b0b1184e88c83834",
    name: "Keyboard Navigation",
    route: "keyboard-navigation",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:17:06.000Z",
    modified: "2022-02-27T17:19:08.094Z",
    shortCode: "keyboardNavigation",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#keyboard-accessible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Interactive elements should be navigable using the Tab key",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Any interactive element that is visible on the page should receive keyboard focus while navigating using the Tab key. If interactive elements exist but aren't keyboard-navigable, users will not be able to interact with them.",
    issueResolution:
      '<p>Links and buttons (<strong>A</strong> and&nbsp;<strong>BUTTON</strong> HTML tags) are keyboard navigable by default. However, other elements like <strong>SPAN</strong>, <strong>DIV, STRONG, I,</strong> and most other elements are not. To make them navigable, give them the <strong>tabindex=0</strong> attribute. Note that A tags (links) are only clickable if they include an HREF attribute. Otherwise, they\'ll also need <strong>tabindex=0.</strong></p>\n<pre class="language-markup"><code>&lt;span tabindex="0"&gt;I\'m a keyboard navigable element&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "tabindex",
        suggestedFixValue: "0",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620570946199d73f9cf2aec9",
    name: "Letter Spacing",
    route: "letter-spacing",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:07:29.000Z",
    modified: "2022-03-27T18:49:44.186Z",
    shortCode: "letterSpacing",
    severity: "medium",
    criteria: "readability",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C211%2C1412#text-spacing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Letter spacing should provide a readable experience",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Using negative letter-spacing  (especially lower than -1px) can be very difficult for certain vision impairments to interact with.",
    issueResolution:
      '<p>Do not use negative values in letter-spacing. Certain fonts look ok with up to -1px in letter spacing, but less than that is almost universally problematic.</p>\n<pre class="language-markup"><code>&lt;style&gt;\nbody * {\n    letter-spacing: 0;\n}\n&lt;/style&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "6206417744306b15b4367a3d",
    name: "Navigation Tagging",
    route: "navigation-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:57:54.000Z",
    modified: "2022-02-26T17:45:13.860Z",
    shortCode: "navigationTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Navigation elements should be tagged as landmarks",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users have different controls to help them browse to specific elements on the page like regions and landmarks such as navigations. To ensure that screen readers can provide that functionality, navigation regions should be tagged accordingly.",
    issueResolution:
      '<p>Add the&nbsp;<strong>role=navigation</strong> or code the navigation regions using the HTML&nbsp;<strong>NAV&nbsp;</strong>tag. Make sure to add an&nbsp;<strong>ARIA-LABEL</strong> to indicate the type of navigation. Is this the main navigation? Products navigation? Support navigation? No need to include the word <strong>"navigation"</strong> or <strong>"menu."</strong> Screen readers, by default, will announce that, like in the below example, which will be announced <strong>"Man\'s clothing navigation region".</strong></p>\n<pre class="language-markup"><code>&lt;nav aria-label="Man\'s clothing"&gt;\n    &lt;ul&gt;...&lt;/ul&gt;\n&lt;/nav&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "tag",
        suggestedFixKey: "",
        suggestedFixValue: "nav",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "{suggestion}",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620641f1f3d7a95964d1879a",
    name: "Broken Nav Tagging",
    route: "broken-nav-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:00:08.000Z",
    modified: "2022-02-26T18:42:17.044Z",
    shortCode: "brokenNavTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Avoid using role menu/menubar for navigation elements",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Using role=menu and role=menubar for navigation elements is a bad practice, and screen reader users, especially JAWS users, find it difficult to operate. Those menu types are better used in desktop applications than web applications.",
    issueResolution:
      "<p>Use <strong>role=navigation</strong> instead of&nbsp;<strong>role=menu/menubar</strong>. Alternatively, directly code the menu using the HTML&nbsp;<strong>NAV&nbsp;</strong>tag.</p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "role",
        suggestedFixValue: "navigation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62065382b0b1184e88c83831",
    name: "Popup Focus",
    route: "popup-focus",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:15:39.000Z",
    modified: "2022-02-27T19:24:44.310Z",
    shortCode: "popupFocus",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#keyboard-accessible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Keyboard focus should move into and lock inside active popups",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Popups that appear on pages without receiving keyboard focus immediately on interaction often block the entire page and make the website unusable for keyboard and screen reader users.",
    issueResolution:
      "<p>When a popup appears, use JavaScript to place the keyboard focus within the popup element. Note that popups are usually built using <strong>DIV</strong> and other elements that are not keyboard focusable by default (only interactive elements like buttons and links are). Therefore, adding <strong>tabindex=-1</strong> to the popup element will make the keyboard focusable, but not navigable using the Tab key, which you want to achieve. See the below code example:</p>\n<pre class=\"language-javascript\"><code>const popup = document.querySelector('.your-popup-selector');\npopup.setAttribute('tabindex', '-1');\npopup.focus();</code></pre>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "tabindex",
        suggestedFixValue: "-1",
        suggestedFixHTML: ""
      }
    ]
  },

  {
    _id: "62065412b0b1184e88c83835",
    name: "Noninteractive Tabindex",
    route: "noninteractive-tabindex",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:18:03.000Z",
    modified: "2022-02-27T19:04:57.054Z",
    shortCode: "noninteractiveTabindex",
    severity: "high",
    criteria: "keyboard",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Non-interactive elements should not be keyboard navigable",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Elements that are not clickable or hoverable using the mouse like headings, regular DIVs, text paragraphs, forms (not fields, and others should not receive keyboard focus. Otherwise, keyboard interaction in your website will be cluttered and difficult.",
    issueResolution:
      "<p>Remove the&nbsp;<strong>tabindex</strong> attribute from the non-interactive element.</p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "tabindex",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620574156199d73f9cf2aed7",
    name: "Column Table Headers",
    route: "column-table-headers",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:21:30.000Z",
    modified: "2022-03-27T18:54:24.699Z",
    shortCode: "columnTableHeaders",
    severity: "high",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Table column headers should be tagged properly for assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Every table should have properly coded column headers either as TH or using role=columnheader. Without properly tagged headers, screen readers won't be able to match the column and cell content and announce them properly to users.",
    issueResolution:
      '<p>Using <strong>TBODY </strong>and <strong>TD </strong>elements while visually making the first row look like headings can work for sighted users only. To make those headings work for assistive technology users, either code them as <strong>THEAD &gt; TH </strong>elements or add the <strong>role=columnheader</strong> attribute to the<strong> </strong><strong>TD </strong>elements that function as the headings to indicate to assistive technology that those are the column headers.</p>\n<pre class="language-markup"><code>&lt;table&gt;\n    &lt;tbody&gt;\n       &lt;tr&gt;\n            &lt;td role="columnheader"&gt;&lt;strong&gt;I\'m visually a column header&lt;/strong&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "columnheader",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058a726199d73f9cf2aedb",
    name: "Main Landmark",
    route: "main-landmark",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:57:02.000Z",
    modified: "2022-02-26T00:49:08.688Z",
    shortCode: "mainLandmark",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The main content area/section should be marked as a landmark",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users have different controls to help them browse directly to specific elements on the page while skipping other, less critical, or page-repetitive elements like the menu. The main content area is one landmark that should be properly tagged.",
    issueResolution:
      '<p>Where the main content on your page starts, give it&nbsp;<strong>role=main</strong> or engulf it with the&nbsp;<strong>MAIN&nbsp;</strong>HTML tag like in the example below:</p>\n<pre class="language-markup"><code>&lt;div role="main"&gt;\n    &lt;h1&gt;Main page heading&lt;/h1&gt;\n&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "main",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206427df3d7a95964d1879c",
    name: "Missing Nav Items",
    route: "missing-nav-items",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:01:47.000Z",
    modified: "2022-02-26T17:27:07.992Z",
    shortCode: "missingNavItems",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Always use a button or link and not only text nodes for navigation items",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Navigation items, whether their functionality is provided using JS (custom behavior) or HTML (links, navigation items should always be coded with a link, button tag, or div/span tags and not as direct text nodes on a parent element.",
    issueResolution:
      '<p>Always include a&nbsp;<strong>link, button</strong>, or <strong>span/div</strong> tags as navigation items and avoid using direct text nodes even if functionality is provided using JS.</p>\n<pre class="language-markup"><code>&lt;nav&gt;\n    &lt;ul&gt;\n        &lt;li&gt;Wrong: direct text node&lt;/li&gt;\n        &lt;li&gt;&lt;button&gt;Correct: direct HTML element&lt;/button&gt;&lt;/li&gt;\n    &lt;/ul&gt;\n&lt;/nav&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "",
        suggestedFixValue: "",
        suggestedFixHTML: '<a href="item link...">item text...</a>'
      }
    ]
  },
  {
    _id: "620650f1b0b1184e88c83824",
    name: "Aria Label Missuse",
    route: "aria-label-missuse",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:04:40.000Z",
    modified: "2022-02-26T20:34:51.488Z",
    shortCode: "ariaLabelMissuse",
    severity: "medium",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Aria labels should not be used on elements that has no roles",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers ignore aria labels on elements that don't have accessibility roles (button, region, link, etc.) if text exists. The aria-label will be announced only if the element doesn't have any text or has an accessibility role.",
    issueResolution:
      '<p>Use <strong>the screen-reader-only</strong> technique to add content to the element rather than an <strong>aria-label.</strong></p>\n<pre class="language-markup"><code>&lt;div&gt;\n    &lt;span class="sr-only"&gt;Screen reader only content&lt;/span&gt;\n    .......\n&lt;/div&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620653a5b0b1184e88c83832",
    name: "Skip Links",
    route: "skip-links",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:16:03.000Z",
    modified: "2022-02-27T13:17:03.748Z",
    shortCode: "skipLinks",
    severity: "high",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink: "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Skip links should exist and be the first elements to receive keyboard focus",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Skip links are essential for keyboard and screen reader users to browse effectively. They allow users to skip repetitive blocks like the menu, and without them, users will have to browse through all the menus on every page before getting to the content.",
    issueResolution:
      '<p>Include a keyboard-navigable, anchor link as the first interactive element on the website. Make this anchor link point to the ID attribute of the section where the content of the page starts. You can make this link available only for screen readers and keyboard users, by hiding it using the CSS opacity attribute (set to 0, and on focus, set the opacity to 1 to make it visible.</p>\n<pre class="language-markup"><code>&lt;style&gt;\n.skip-link {\n    opacity: 0;\n}\n\n.pause-button:focus-visible {\n    opacity: 1;\n}\n&lt;/style&gt;\n\n&lt;body&gt;\n    &lt;a href="content" class="skip-link"&gt;Skip to content&lt;/a&gt;\n    .....\n    &lt;header&gt;&lt;/header&gt;\n    &lt;nav&gt;&lt;/nav&gt;\n    &lt;main&gt;\n        &lt;div id="content"&gt;\n            &lt;h1&gt;....&lt;/h1&gt;\n        &lt;/div&gt;\n        .....\n    &lt;/main&gt;\n    &lt;footer&gt;&lt;/footer&gt;\n&lt;/body&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "",
        suggestedFixValue: "",
        suggestedFixHTML: '<a href="#content">Skip to content</a>'
      }
    ]
  },
  {
    _id: "62058a8a6199d73f9cf2aedc",
    name: "Article Setup",
    route: "article-setup",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:58:10.000Z",
    modified: "2022-02-25T21:21:13.591Z",
    shortCode: "articleSetup",
    severity: "low",
    criteria: "context",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Article tags that aren't articles should lose their role",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Coding elements that aren't full-featured text articles, using the article HTML tag, make the screen reader user experience unnecessarily cluttered and verbose.",
    issueResolution:
      '<p>Use the <strong>role=presentation</strong> attributes to reset the standard accessibility article role of an element coded as an article while it isn\'t the full-featured text article. Another approach is simply changing the HTML tag from an article to something like a <strong>DIV.</strong></p>\n<pre class="language-markup"><code>&lt;article role="presentation"&gt;&lt;/article&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206340aacb7f0495c5df39e",
    name: "Custom Control Field",
    route: "custom-control-field",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:01:03.000Z",
    modified: "2022-02-26T15:53:01.815Z",
    shortCode: "customControlField",
    severity: "high",
    criteria: "forms",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Custom checkbox and radio inputs should be made accessible",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Screen readers have built-in mechanisms to handle checkboxes. By default, assistive technology does not support custom checkboxes, and using those may prevent screen reader users from interacting with the fields. ",
    issueResolution:
      '<p>If you are using standard <strong>LABEL </strong>and <strong>INPUT </strong>fields to design the custom checkbox using CSS, you need to ensure that the <strong>checkbox input </strong>is fully visible to assistive technology and the browser, but only visually hidden. To ensure that, you can hide it using opacity, width, height, and positioning, but <strong>never hide it using display=none or visibility=hidden.</strong></p>\n<pre class="language-markup"><code>&lt;div&gt;\n    &lt;label for="checkbox-input"&gt;Custom design&lt;/label&gt;\n    &lt;input type="checkbox" id="checkbox-input" style="position: absolute; top: -100%, left: -100%, opacity: 0; width: 0, height: 0;"&gt;\n&lt;/div&gt;</code></pre>\n<p>Alternatively, if you are using a completely custom checkbox mechanism without a standard checkbox input, create a standard select field with all the options and make it available only for screen readers using the <strong>screen reader only </strong>technique. Then, hide the custom select box from screen readers using <strong>aria-hidden=true.</strong> Don\'t forget to add the same functionality to this hidden field as your custom one.</p>\n<p>Using this method, screen readers will not "see" the custom field but will see the standard one and interact with it regularly.</p>\n<pre class="language-markup"><code>&lt;div class="checkbox" aria-hidden="true"&gt;✓&lt;/div&gt;\n&lt;input type="checkbox" class="sr-only"&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620642bef3d7a95964d1879d",
    name: "Missused Nav Tagging",
    route: "missused-nav-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:03:25.000Z",
    modified: "2022-02-26T18:36:21.056Z",
    shortCode: "missusedNavTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "A non-navigation element is improperly tagged as such",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers rely on accurate tagging and labeling to provide the necessary context to screen readers. If an element is tagged as a navigation landmark while it isn't, screen reader users will lose orientation and find the website difficult to use. ",
    issueResolution:
      "<p>Add the&nbsp;<strong>role=presentation</strong> attribute to the improper navigation element, or code it using a&nbsp;<strong>DIV</strong> tag rather than a&nbsp;<strong>NAV</strong> tag. Eliminate&nbsp;<strong>role=navigation</strong> if exists.</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62065117b0b1184e88c83825",
    name: "Broken Aria Reference",
    route: "broken-aria-reference",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:05:06.000Z",
    modified: "2022-02-26T20:40:43.445Z",
    shortCode: "brokenAriaReference",
    severity: "high",
    criteria: "errors",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Aria describedby/labelledby must point to a valid, existing element ID",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers rely on the HTML to provide explicit references between elements in order to parse the content and announce it to screen readers correctly. If the HTML includes broken ARIA references, screen reader users may not be able to browse properly. ",
    issueResolution:
      '<p>Make sure that&nbsp;<strong>aria-describedby&nbsp;</strong>and&nbsp;<strong>aria-labeledby</strong> attributes point to an existing, screen-reader-visible element on the screen with proper text content.</p>\n<pre class="language-markup"><code>&lt;button aria-describedby="button-description"&gt;Load more&lt;/button&gt;\n&lt;span id="button-descriptionc"&gt;Additional gallery images will appear in a popup&lt;/span&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "62065199b0b1184e88c83828",
    name: "Load Autofocus",
    route: "load-autofocus",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:07:28.000Z",
    modified: "2022-02-26T20:48:32.158Z",
    shortCode: "loadAutofocus",
    severity: "high",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Avoid using autofocus",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "When using the autofocus HTML attribute screen reader, users will automatically be taken to the autofocus field. The screen reader will completely ignore everything else on the page that appears before that field, like the navigation and other essential elements.",
    issueResolution: "<p>Remove the&nbsp;<strong>autofocus</strong></p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "",
        suggestedFixValue: "autofocus",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6205736e6199d73f9cf2aed5",
    name: "Table Layouts",
    route: "table-layouts",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:19:14.000Z",
    modified: "2022-03-27T18:53:51.293Z",
    shortCode: "tableLayouts",
    severity: "high",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Tables used for building layouts should lose table role",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users have a specific way of interacting and navigating within tables. If tables are used for layout purposes and not for displaying information, assistive technology users won't be able to browse them or consume their content.",
    issueResolution:
      '<p>Tables used for layout purposes should have their accessibility table role reset to presentation using the <strong>role=presentation </strong>attributes. This way, assistive technology will treat them as content blocks rather than tables.</p>\n<pre class="language-markup"><code>&lt;table role="presentation"&gt;&lt;/table&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058aba6199d73f9cf2aede",
    name: "Footer Landmark",
    route: "footer-landmark",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:58:55.000Z",
    modified: "2022-02-25T21:30:48.418Z",
    shortCode: "footerLandmark",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The footer should be labled as marked as a contentinfo landmark",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      'Screen reader users have different controls to help them browse directly to specific elements on the page while skipping other, less critical, or page-repetitive elements like the menu. The footer area, also known as "contentinfo," should be tagged appropriately.',
    issueResolution:
      '<p>Use the&nbsp;<strong>role=contentinfo</strong> alongside <strong>aria-label=footer</strong> attributes to indicate a footer contentinfo. Alternatively, you can code your footer using the <strong>FOOTER</strong><strong> HTML&nbsp;</strong>tag which by default is treated as the contentinfo landmark by screen readers.</p>\n<pre class="language-markup"><code>&lt;div role="contentinfo" aria-label="footer"&gt;&lt;/div&gt;\n&lt;footer&gt;&lt;/footer&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "contentinfo",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206419144306b15b4367a3e",
    name: "Breadcrumbs",
    route: "breadcrumbs",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:59:03.000Z",
    modified: "2022-02-26T17:47:57.389Z",
    shortCode: "breadcrumbs",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Breadcrumbs navigation should be tagged properly",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Breadcrumb navigation regions are essential for user orientation. If not appropriately tagged, screen reader users will not know that such an option exists on the page and will face more difficulties browsing around.",
    issueResolution:
      '<p>Add a&nbsp;<strong>role=navigation</strong> or code the breadcrumbs using the HTML <strong>NAV </strong>tag. This will indicate to screen readers that it is a navigation region. Lastly, add an <strong>aria-label=Breadcrumbs </strong>attribute so screen readers can announce that to users.</p>\n<pre class="language-markup"><code>&lt;nav aria-label="Breadcrumbs"&gt;&lt;/nav&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "tag",
        suggestedFixKey: "",
        suggestedFixValue: "nav",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "breadcrumbs",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206432ff3d7a95964d1879f",
    name: "Submenu Trigger Tagging",
    route: "submenu-trigger-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:05:51.000Z",
    modified: "2022-02-26T18:40:12.401Z",
    shortCode: "submenuTriggerTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Sub-menu trigger buttons/links should be tagged properly",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    issueResolution:
      '<p>Use the <strong>aria-haspopup=true, </strong>directly on the link/button menu item that triggers the sub-menu, to indicate a sub-menu trigger. Add the <strong>aria-expanded=false </strong>attributes to indicate that this sub-menu can be expanded and collapsed (set true when expanded).</p>\n<pre class="language-markup"><code>&lt;ul&gt;\n    &lt;li&gt;\n        &lt;a href="..." aria-expanded="true/false" aria-haspopup="true"&gt;Products&lt;/a&gt;\n        &lt;div class="sub-menu"&gt;...&lt;/div&gt;\n    &lt;/li&gt;\n&lt;/ul&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-haspopup",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-expanded",
        suggestedFixValue: "false",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620652c5b0b1184e88c8382d",
    name: "Noticeable Focus",
    route: "noticeable-focus",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:12:29.000Z",
    modified: "2022-02-27T12:37:25.198Z",
    shortCode: "noticeableFocus",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "AA",
    issueWCAGLink: "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Keyboard focus should be noticeable and distinctable",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Using Tab key navigation, interactive, focusable elements must have a noticeable outline around them to indicate that they are focused. Otherwise, keyboard users will lose orientation and won't know where they are at.",
    issueResolution:
      '<p>Use&nbsp;<strong>CSS</strong> outline to add noticeable keyboard focus to interactive elements.</p>\n<p>Often web designers refrain from including keyboard focus arguing that it distracts from the website\'s design and user interface for users who do not use a keyboard but a mouse or a touch screen.</p>\n<p>This can easily be solved using the CSS <strong>focus-visible&nbsp;</strong>pseudo class. This CSS feature will include certain CSS attributes on elements only if they are focused using the keyboard, and will not include it if they are focused using the mouse. See the example below:</p>\n<pre class="language-css"><code>// this will only show on keyboard focus \nbody *:focus-visible {\n    outline: solid 2px #6495ED;\n    outline-offset: 5px;\t\n}\n\n// this will only show on both keyboard and mouse focus\nbody *:focus {\n    outline: solid 2px #6495ED;\n    outline-offset: 5px;\t\n}</code></pre>',
    suggestedFix: []
  },
  {
    _id: "6204f42c676c2425ec000531",
    name: "Page Title",
    route: "page-title",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T11:15:42.000Z",
    modified: "2022-03-27T18:48:33.514Z",
    shortCode: "pageTitle",
    severity: "extreme",
    criteria: "document",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412%2C242#page-titled",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The HEAD element should include a descriptive page title ",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "The document/page title is the first bit of context announced to screen reader users when a page loads. Without a properly descriptive document title, screen readers users won't know which page they've landed on.",
    issueResolution:
      '<p>Include a descriptive title tag in the head portion of your HTML, on every page of your website.</p>\n<pre class="language-markup"><code>&lt;head&gt;\n&lt;title&gt;I\'m the page title&lt;/title&gt;\n...\n&lt;/head&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620573ca6199d73f9cf2aed6",
    name: "Headless Tables",
    route: "headless-tables",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:19:58.000Z",
    modified: "2022-03-27T18:54:12.909Z",
    shortCode: "headlessTables",
    severity: "high",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Tables should include table header tags",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers can't match columns and cells without properly coded table header tags (TH). Without table headers, screen readers won't announce the table's content properly to users, leaving them unable to consume information.",
    issueResolution:
      '<p>Add a <strong>THEAD </strong>element to indicate a table heading section, and include <strong>TH&nbsp;</strong>elements for every column, describing the purpose of that table column.&nbsp;</p>\n<pre class="language-markup"><code>&lt;thead&gt;\n    &lt;tr&gt;\n        &lt;th&gt;Header1&lt;/th&gt;\n        &lt;th&gt;Header2&lt;/th&gt;\n        &lt;th&gt;Header3&lt;/th&gt;\n    &lt;/tr&gt;\n&lt;thead&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "62065146b0b1184e88c83826",
    name: "Redundant Aria Labels",
    route: "redundant-aria-labels",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:05:53.000Z",
    modified: "2022-02-26T20:44:33.460Z",
    shortCode: "redundantAriaLabels",
    severity: "low",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Aria-label is redundant when it has the same value as the content",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Aria labels are used to label elements without text, like icons and fields. Providing the exact text of an element in an aria-label is redundant and potentially dangerous because content changes as updates roll out, and the aria-label can become misleading.",
    issueResolution: "<p>Remove the&nbsp;<strong>aria-label.</strong></p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "aria-label",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6204f180676c2425ec00052f",
    name: "Empty Links",
    route: "empty-links",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T11:03:47.000Z",
    modified: "2022-03-27T18:47:52.802Z",
    shortCode: "emptyLinks",
    severity: "high",
    criteria: "clickables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Empty links should indicate their location or excluded from assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: false,
    issueDescription:
      "Screen reader users need to figure out a link's destination based on the text or a coded label. This is because they interact with one element at a time and don't see visual cues that provide more context.",
    issueResolution:
      '<p>Use an aria-label or the screen-reader-only text technique to provide links with extra context regarding &nbsp;their destination and functionality like in the example below:</p>\n<pre class="language-markup"><code>&lt;a href="...."&gt;&lt;span class="sr-only"&gt;Blog article: 10 different ways to...&lt;/span&gt;&lt;/a&gt;\n&lt;a href="...." aria-label="Blog article: 10 different ways to..."&gt;&lt;/a&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620570c26199d73f9cf2aeca",
    name: "Color Contrast",
    route: "color-contrast",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:07:54.000Z",
    modified: "2022-03-27T18:50:24.818Z",
    shortCode: "colorContrast",
    severity: "medium",
    criteria: "readability",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#contrast-minimum",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The color contrast ratio between text and its background should provide a readable experience",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "The color contrast between the foreground and the background elements needs to meet a ratio of at least 4.5:1 for standard text. For large text above 18px font size, a lower ratio of 3:1 can be met, but it is recommended to remain with 4:5:1 in any case.",
    issueResolution:
      '<p>Work with the website\'s designers to choose colors that properly meet the minimum contrast ratio requirements. To check color contrast with different potential colors, use Webaim\'s contrast checker: <a href="https://webaim.org/resources/contrastchecker" target="_blank" rel="noopener">https://webaim.org/resources/contrastchecker</a></p>',
    suggestedFix: []
  },
  {
    _id: "620589f86199d73f9cf2aed9",
    name: "Sale Prices",
    route: "sale-prices",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:53:24.000Z",
    modified: "2022-02-25T21:02:42.658Z",
    shortCode: "salePrices",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Old sale prices should be indicated to assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: false,
    issueDescription:
      "Websites often show two numbers to indicate a sale. The original price, and then the sale price. Blind screen reader users don't see visual cues to know the difference and will hear two numbers without knowing which is correct or if there's an issue on the page.  ",
    issueResolution:
      '<p>Add a screen-reader-only text element inside the original price element to indicate that this is, in fact, an old or the original price. This way, screen reader users will understand that the other price is current.</p>\n<pre class="language-markup"><code>&lt;div&gt;$100 &lt;span class="sr-only"&gt;Original price&lt;/span&gt;&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "Original price",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058a2e6199d73f9cf2aeda",
    name: "User Rating",
    route: "user-rating",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:56:18.000Z",
    modified: "2022-02-25T21:04:01.729Z",
    shortCode: "userRating",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "User rating should be tagged properly for assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "When showing customer satisfaction using a visual rating system like  1-5 star indication, we need to indicate the rating as text, so screen readers users will be able to learn about it when researching a product or service.",
    issueResolution:
      '<p>Add a screen-reader-only text element to indicate the aggregated, final rating, inside the rating system element like in the example below:</p>\n<pre class="language-markup"><code>&lt;div&gt;\n★★★★★ &lt;span class="sr-only"&gt;5/5 rating&lt;/span&gt;\n&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "{suggestion} rating",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206338cacb7f0495c5df39b",
    name: "Field Required",
    route: "field-required",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T09:59:07.000Z",
    modified: "2022-02-26T11:51:16.780Z",
    shortCode: "fieldRequired",
    severity: "high",
    criteria: "forms",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#error-suggestion",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Required fields must be tagged as such for assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users need to know if a field is required when interacting with it. Otherwise, screen reader users will need to go back and forth to understand why their submission attempt doesn't work as expected.",
    issueResolution:
      '<p>Add the&nbsp;<strong>aria-required=true</strong> attribute to indicate to screen readers that a field is required and the form won\'t submit without it.</p>\n<pre class="language-markup"><code>&lt;input aria-required="true"&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-required",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620633b0acb7f0495c5df39c",
    name: "Form Duplicate IDs",
    route: "form-duplicate-ids",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T09:59:40.000Z",
    modified: "2022-02-26T12:14:00.688Z",
    shortCode: "formDuplicateIDs",
    severity: "medium",
    criteria: "forms",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Forms and form fields must have unique ID attributes",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers rely on ID attributes to be unique in order to announce to the users the correct content. If IDs are not unique, screen readers won't know which element is the correct one.",
    issueResolution:
      "<p>Change the ID of the duplicate fields and forms so they are unique.</p>",
    suggestedFix: []
  },
  {
    _id: "6206410244306b15b4367a3b",
    name: "Submenu State",
    route: "submenu-state",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:56:28.000Z",
    modified: "2022-02-26T17:22:24.436Z",
    shortCode: "submenuState",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Sub menu open/close states should be indicated to assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers require properly coded states for interactive elements. Submenus can be expanded or collapsed, and their state should be indicated to screen readers. Otherwise, users will lose orientation and get confused while browsing the menu.",
    issueResolution:
      '<p>Use the <strong>aria-haspopup=true</strong> to indicate a sub-menu trigger, and the <strong>aria-expanded=true</strong> to indicate expanded sub-menus and <strong>aria-expanded=false</strong> to indicate collapsed sub-menus. Make sure to switch between&nbsp;<strong>true </strong>and <strong>false</strong> dynamically as users interact, open and close sub-menus.</p>\n<p><strong>Note:</strong> the <strong>aria-expanded</strong> attribute must be placed on the&nbsp;<strong>link&nbsp;</strong>or&nbsp;<strong>button&nbsp;</strong>menu items only. Otherwise, they won\'t work.</p>\n<pre class="language-markup"><code>&lt;ul&gt;\n    &lt;li&gt;\n        &lt;a href="..." aria-expanded="true/false" aria-haspopup="true"&gt;Products&lt;/a&gt;\n        &lt;div class="sub-menu"&gt;...&lt;/div&gt;\n    &lt;/li&gt;\n&lt;/ul&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-expanded",
        suggestedFixValue: "false",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-haspopup",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62064fbf807c385bb8e74a7f",
    name: "Title Missuse",
    route: "title-missuse",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:59:22.000Z",
    modified: "2022-02-26T20:16:27.769Z",
    shortCode: "titleMissuse",
    severity: "low",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Title attributes should not be used to deliver information",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Screen readers do not announce content inside title tags. They only show it when using certain screen reader features. Therefore it should not be used to deliver information to the user, or else users will most likely miss that information.",
    issueResolution:
      '<p>Use the&nbsp;<strong>screen-reader-only&nbsp;</strong>technique to provide information instead of the title attribute. Create a <strong>screen-reader-only </strong>element and put it inside the tag you originally intended to use a title attribute on.</p>\n<p>If the mentioned tag is self-closing, e.g no closing required like input and img, add the content as an <strong>aria-label</strong> instead of a <strong>screen-reader-only </strong>element.</p>\n<pre class="language-markup"><code>&lt;span class="sr-only"&gt;Content goes here...&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "title",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "Complementary text here instead of title...",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62046deec839872ab00872e0",
    name: "Link Context",
    route: "link-context",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T01:42:35.000Z",
    modified: "2023-02-05T15:43:36.786Z",
    shortCode: "linkContext",
    severity: "high",
    criteria: "clickables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#link-purpose-in-context",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Links should indicate their functionality and destination to assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Visual cues on pages provide context to links or hint functionality to users with sight, even if the links aren't fully descriptive. Screen reader users need to know where a link will take them based on the anchor text without additional context.",
    issueResolution:
      "<p>Examples include links to the shopping cart, to the company's Facebook page, to the site's search page, or to other similar destinations.</p>\n<p>If the link's anchor text doesn't explicitly describe those destinations, add screen-reader only text describing the destination, as seen in the example below:</p>\n<pre class=\"language-markup\"><code>&lt;span class=\"sr-only\"&gt;Shopping Cart&lt;/span&gt;</code></pre>",
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "{suggestion}",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620570816199d73f9cf2aec8",
    name: "Font Sizes",
    route: "font-sizes",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T11:35:07.000Z",
    modified: "2022-03-27T18:49:26.276Z",
    shortCode: "fontSizes",
    severity: "medium",
    criteria: "readability",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C144#resize-text",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Font sizes should provide a readable experience",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Using small font sizes (usually 12 pixels or below) can be very difficult for certain vision impairments to interact with.",
    issueResolution:
      '<p>Do not use less than 12px font-sizes. Ideally, don\'t go lower than 14px.</p>\n<p>&nbsp;</p>\n<pre class="language-markup"><code>&lt;style&gt;\nbody * {\n    font-size: 15px;\n}\n&lt;/style&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620572506199d73f9cf2aed1",
    name: "Empty Headings",
    route: "empty-headings",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:14:46.000Z",
    modified: "2022-03-27T18:52:21.349Z",
    shortCode: "emptyHeadings",
    severity: "high",
    criteria: "headings",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#headings-and-labels",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Empty headings should be excluded from assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen reader users use header navigation to skim through pages and quickly learn their topics. If empty headers exist, the header navigation feature breaks, and assistive technology users will find the page very difficult to browse.",
    issueResolution:
      "<p>Remove empty heading tags from your HTML, or add content to them.</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620573426199d73f9cf2aed4",
    name: "Nested Tables",
    route: "nested-tables",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:17:48.000Z",
    modified: "2022-03-27T18:53:30.173Z",
    shortCode: "nestedTables",
    severity: "medium",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Avoid using nested tables",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Nesting table within tables completely breaks the orientation of screen reader users. Assistive technology relies on matching column and row cells to announce table content to users, and if tables are nested, screen readers start to read random text.",
    issueResolution:
      '<p>If you\'ve nested tables to create specific layouts visually, but the parent table still functions as a regular table for information delivery, use role=presentation on the nested table to erase its accessibility table role. If the whole table structure is for layout purposes only and not for displaying information in a table, use role=presentation on both nested and parent tables.</p>\n<pre class="language-markup"><code>&lt;table&gt;\n    &lt;tbody&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;table role="presentation"&gt;&lt;/table&gt;\n            &lt;/td&gt;\n         &lt;tr&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620651e9b0b1184e88c8382a",
    name: "Empty List",
    route: "empty-list",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:08:41.000Z",
    modified: "2022-02-26T20:53:50.741Z",
    shortCode: "emptyList",
    severity: "low",
    criteria: "errors",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Lists without items or with a single item should lose the list role",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "An empty list will still be visible for screen reader users. It may frustrate and confuse users as to whether the list is actually empty or there is a screen-reader/accessibility issue that prevents their screen-reader from reading the list items.",
    issueResolution:
      '<p>Remove the empty HTML list tags (<strong>UL/OL</strong>) or give them <strong>aria-hidden=true to </strong>make screen-readers ignore them.</p>\n<pre class="language-markup"><code>&lt;ul aria-hidden="true"&gt;&lt;/ul&gt;\n&lt;ol aria-hidden="true"&gt;&lt;/ol&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-hidden",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620572b76199d73f9cf2aed2",
    name: "Untagged Headings",
    route: "untagged-headings",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:15:12.000Z",
    modified: "2022-03-27T18:52:57.370Z",
    shortCode: "untaggedHeadings",
    severity: "high",
    criteria: "headings",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Headings should be tagged or coded accordingly",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Text blocks that visually function as headings for sighted users should also be tagged as headings for screen reader users, even if they are not coded as native headers.",
    issueResolution:
      '<p>If you specifically coded headers without native header HTML tags (like H1, H2, etc.) for SEO reasons or otherwise, use <strong>role=heading</strong> and <strong>aria-level=1/2/3/4/5/6</strong> (the appropriate heading level) to determine a heading to screen readers. Alternatively, you can directly code those elements as native HTML headers.</p>\n<pre class="language-markup"><code>&lt;span role="heading" aria-level="3"&gt;This will be treated by screen readers like an H3 heading&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "heading",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-level",
        suggestedFixValue: "1/2/3...",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058a9f6199d73f9cf2aedd",
    name: "Iframe Labeling",
    route: "iframe-labeling",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:58:35.000Z",
    modified: "2022-02-25T21:27:47.735Z",
    shortCode: "iframeLabeling",
    severity: "medium",
    criteria: "context",
    WCAGLevel: "none",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Iframe elements should be labeled properly for assistive techonology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers treat iframes as an integral part of the web page. Iframes often provide a specific functionality like a form or a YouTube video. If Iframes are unlabeled, users can't choose whether to enter them or not and how they relate to the page.",
    issueResolution:
      '<p>Use the&nbsp;<strong>aria-label&nbsp;</strong>attribute to indicate the functionality of a given iframe like in the example below:</p>\n<pre class="language-markup"><code>&lt;iframe src="..." aria-label="YouTube tutorial video"&gt;&lt;/iframe&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206348facb7f0495c5df3a1",
    name: "Form Submissions Status",
    route: "form-submissions-status",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:02:37.000Z",
    modified: "2022-02-26T12:23:04.562Z",
    shortCode: "formSubmissionsStatus",
    severity: "high",
    criteria: "forms",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#status-messages",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Submission statuses (success/failure) should be indicated to assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users rely on status messages to automatically announce when a form is submitted. If status messages are not automatically announced, screen reader users will have to attempt to understand the status by browsing around picking clues.",
    issueResolution:
      '<p>Include the&nbsp;<strong>role=alert&nbsp;</strong>attributes on the success/failure message of your forms.</p>\n<p>Please note that the alert message should appear only once to announce the form status and not every field validation. Field validations should be handled separately.</p>\n<pre class="language-markup"><code>&lt;div role="alert"&gt;Thank you, we\'ll get back to you shortly.&lt;/div&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620652adb0b1184e88c8382c",
    name: "Enter Clickability",
    route: "enter-clickability",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:11:08.000Z",
    modified: "2022-02-27T12:26:45.500Z",
    shortCode: "enterClickability",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#keyboard-accessible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Interactive elements should be clickable using the Enter key",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Only links with an href attribute, buttons, and a handful of other, less usable tags can be triggered using the Enter key by default. If you've used different elements and added JS click events to them, those elements are not operable using the keyboard.",
    issueResolution:
      "<p>Add JavaScript to ensure that elements that are not clickable by default are clickable using the enter key. Alternatively, use native <strong>BUTTON </strong>and <strong>A</strong> HTML elements, which are keyboard clickable by default. Note that <strong>A</strong> tags (links) are only clickable if they include an <strong>HREF</strong> attribute.</p>\n<p>If you choose to go the JavaScript route, you can copy and paste the below, which will add that functionality to your website. However, make sure to include your clickable selectors where the <strong>\".your-clickable-selectors\"</strong> text appears.&nbsp;</p>\n<pre class=\"language-javascript\"><code>document.addEventListener('keydown', e =&gt; {\n    if( e.which !== 13 || ['BUTTON', 'A'].includes(e.target.tagName) || ! e.target.closest('.your-clickable-selectors') ) return;\n    e.target.click();\n})</code></pre>",
    suggestedFix: []
  },
  {
    _id: "6204715c00e72f4578e07365",
    name: "Button Roles",
    route: "button-roles",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T01:58:13.000Z",
    modified: "2022-03-27T17:25:43.093Z",
    shortCode: "buttonRoles",
    severity: "extreme",
    criteria: "clickables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Elements with button functionality should have proper roles",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers treat elements that function as buttons but aren't labeled as such, as blocks of text. This means that blind users won't know that those elements are interactive.",
    issueResolution:
      '<p>To indicate to a screen reader that an element is actually a button, we can either use the ARIA-role technique (adding <strong>role=button</strong>) as shown in the SPAN and DIV examples below or convert the element tag to a native button with a <strong>type=button </strong>attribute. If the button submits a form, the "<strong>type</strong>" attribute would be "<strong>submit</strong>".</p>\n<pre class="language-markup"><code>&lt;span role="button"&gt;I\'m a SPAN that functions like a button for screen readers&lt;/span&gt;\n&lt;div role="button"&gt;I\'m a DIV that functions like a button for screen readers&lt;/div&gt;\n&lt;button type="button"&gt;I\'m a NATIVE button&lt;/button&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "tag",
        suggestedFixKey: "",
        suggestedFixValue: "button",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "type",
        suggestedFixValue: "button",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620471f050ec392830b7e7ca",
    name: "New Window Links",
    route: "new-window-links",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T02:00:22.000Z",
    modified: "2022-03-27T17:26:01.122Z",
    shortCode: "newWindowLinks",
    severity: "medium",
    criteria: "clickables",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Links should indicate if they open a new tab to assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "By default, screen readers do not indicate if links will open a new window to users. When links unexpectedly open a new window, this often frustrates and disorientates a screen reader user.",
    issueResolution:
      '<p>Use the screen-reader-only technique to indicate to screen reader users when a link will open a new window.</p>\n<pre class="language-markup"><code>&lt;span class="sr-only"&gt;New Window&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "new window",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620571dd6199d73f9cf2aece",
    name: "Background Images",
    route: "background-images",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:10:54.000Z",
    modified: "2022-02-25T17:47:38.151Z",
    shortCode: "backgroundImages",
    severity: "medium",
    criteria: "graphics",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Non decorative Background images should be tagged and labeled",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Background images should receive alternative text just like regular images do unless used as decorative elements and do not provide any information or additional context to the users.",
    issueResolution:
      '<p>Use the&nbsp;<strong>screen-reader-only</strong> technique combined with the <strong>role=img</strong> and&nbsp;<strong>aria-label</strong> attributes to indicate to screen readers that there\'s an image and the description for that image. Make sure to include the embedded text of the image alongside the objects that comprise it in the <strong>aria-label </strong>description.</p>\n<p>Add The screen-ready-only element into the element with the background image like in the example below:</p>\n<pre class="language-markup"><code>&lt;div style="background-image: url(...)"&gt;&lt;span class="sr-only" role="img" aria-label="Shop Tennins gear. Two people playing professional tennis in a stadium with spectators."&gt;&lt;/span&gt;&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "Background Image description...",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620572096199d73f9cf2aecf",
    name: "Main Heading",
    route: "main-heading",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:13:17.000Z",
    modified: "2022-03-27T18:51:56.426Z",
    shortCode: "mainHeading",
    severity: "high",
    criteria: "headings",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#headings-and-labels",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "A descriptive main heading (H1) should exist on every page",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users rely on the main header (H1) tag to determine the topic of the page and the main content section. Pages without a main header are more difficult for assistive technology users to browse.",
    issueResolution:
      "<p>Include single, descriptive, visible H1 (main header) on every page. Make sure that the header is placed where the content section of the page starts, and that it provides enough information to determine the page's topic.</p>\n<pre class=\"language-markup\"><code>&lt;h1&gt;I'm a main heading...&lt;/h1&gt;</code></pre>",
    suggestedFix: []
  },
  {
    _id: "62058b0a6199d73f9cf2aee0",
    name: "Active Tab",
    route: "active-tab",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T22:00:01.000Z",
    modified: "2022-02-26T00:38:49.649Z",
    shortCode: "activeTab",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The active tab should be tagged as such for assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers require properly coded states for interactive elements. Tabs can have active and inactive states, and just like an active state usually is visually distinct, this should be indicated to screen reader users in the code.",
    issueResolution:
      "<p>Add the <strong>aria-selected=true</strong> to the active tab, alongside the&nbsp;<strong>role=tab</strong> to indicate that the element is indeed a tab. It's also essential to make sure to change the <strong>aria-selected=true</strong> to <strong>false </strong>when another tab becomes active (and that other tab should receive <strong>true</strong>).</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "tab",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-selected",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62064fe4807c385bb8e74a80",
    name: "Fake Hidden Content",
    route: "fake-hidden-content",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:59:59.000Z",
    modified: "2022-02-26T20:23:47.270Z",
    shortCode: "fakeHiddenContent",
    severity: "high",
    criteria: "errors",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Visually hidden content should be excluded from assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Hiding elements on screen using any other method than display=none or visibility=hidden still makes them available for screen readers and when they are not intended to be visible or available to anyone.",
    issueResolution:
      '<p>Add the&nbsp;<strong>aria-hidden=true</strong> attribute&nbsp;<strong>to the parent element</strong> of all the hidden content on the screen that isn\'t hidden using <strong>display=none or visibility=hidden.</strong> When this element becomes visible, for example, if it is a popup that has now appeared on screen, change the <strong>aria-hidden</strong> to&nbsp;<strong>false</strong>. And when it becomes hidden again, change the&nbsp;<strong>aria-hidden&nbsp;</strong>to&nbsp;<strong>true.</strong> The&nbsp;<strong>aria-hidden</strong> attribute should reflect the visibility state of such elements at all times.</p>\n<pre class="language-markup"><code>&lt;div class="hidden-parent" aria-hidden="true"&gt;\n    &lt;p&gt;Some content...&lt;/p&gt;\n    &lt;ul&gt;...&lt;/ul&gt;\n&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-hidden",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620653c2b0b1184e88c83833",
    name: "Broken Tabindex",
    route: "broken-tabindex",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:16:38.000Z",
    modified: "2022-02-27T17:10:55.599Z",
    shortCode: "brokenTabindex",
    severity: "high",
    criteria: "keyboard",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Tabindex values should not exceed 0",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Tabindex values should be 0 for navigable elements or -1 for non-navigable but focusable elements. Any tabindex value above 0 is strictly invalid and will prevent keyboard users from interacting with your website properly.",
    issueResolution:
      "<p>If the element should be navigable, give it&nbsp;<strong>tabindex=0.</strong> If you've provided tabindex above 0 because you try to control focus order, then reorder elements in your HTML, but in any case, do not use tabindex above 0.</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "tabindex",
        suggestedFixValue: "0",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058adf6199d73f9cf2aedf",
    name: "Incorrect Main Landmark",
    route: "incorrect-main-landmark",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:59:22.000Z",
    modified: "2022-02-25T21:36:15.024Z",
    shortCode: "incorrectMainLandmark",
    severity: "high",
    criteria: "context",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "The main landmark is different than the tagged one",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "The main content area should be where the content begins, often wrapping the page's main heading. However, it should not wrap the entire HTML code or be placed in the wrong location on the page (not directly where the content begins).",
    issueResolution:
      '<p>Reset the accessibility role of the inappropriate main area using the&nbsp;<strong>role=presentation&nbsp;</strong>attributes, or change the&nbsp;<strong>MAIN</strong> <strong>HTML&nbsp;</strong>tag to a <strong>DIV&nbsp;</strong>or a <strong>SECTION.</strong></p>\n<pre class="language-markup"><code>&lt;main role="presentation"&gt;&lt;/main&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206430ff3d7a95964d1879e",
    name: "Broken Submenu Indication",
    route: "broken-submenu-indication",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:04:31.000Z",
    modified: "2022-02-26T17:32:07.084Z",
    shortCode: "brokenSubmenuIndication",
    severity: "low",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Sub menu indication should only be on the nav item's link/button tag and should not exist if sub menu doesn't exist",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "The coded submenu indications should be placed on the link or button item and not on any other menu element like an LI. If a sub-menu does not exist, those indications should not exist. Otherwise, screen reader users will lose orientation using the menu.",
    issueResolution:
      "<p>Remove the&nbsp;<strong>aria-expanded&nbsp;</strong>and&nbsp;<strong>aria-haspopup</strong> from any element of the menu item that isn't the link <strong>(A tag)</strong> or the&nbsp;<strong>BUTTON&nbsp;</strong>tag. If the menu item doesn't have a sub menu, completely remove the&nbsp;<strong>aria-expanded&nbsp;</strong>and&nbsp;<strong>aria-haspopup&nbsp;</strong>from any of the menu item elements.</p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "aria-expanded",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "aria-haspopup",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620653e8b0b1184e88c83834",
    name: "Keyboard Navigation",
    route: "keyboard-navigation",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:17:06.000Z",
    modified: "2022-02-27T17:19:08.094Z",
    shortCode: "keyboardNavigation",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#keyboard-accessible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Interactive elements should be navigable using the Tab key",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Any interactive element that is visible on the page should receive keyboard focus while navigating using the Tab key. If interactive elements exist but aren't keyboard-navigable, users will not be able to interact with them.",
    issueResolution:
      '<p>Links and buttons (<strong>A</strong> and&nbsp;<strong>BUTTON</strong> HTML tags) are keyboard navigable by default. However, other elements like <strong>SPAN</strong>, <strong>DIV, STRONG, I,</strong> and most other elements are not. To make them navigable, give them the <strong>tabindex=0</strong> attribute. Note that A tags (links) are only clickable if they include an HREF attribute. Otherwise, they\'ll also need <strong>tabindex=0.</strong></p>\n<pre class="language-markup"><code>&lt;span tabindex="0"&gt;I\'m a keyboard navigable element&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "tabindex",
        suggestedFixValue: "0",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620570946199d73f9cf2aec9",
    name: "Letter Spacing",
    route: "letter-spacing",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:07:29.000Z",
    modified: "2022-03-27T18:49:44.186Z",
    shortCode: "letterSpacing",
    severity: "medium",
    criteria: "readability",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C211%2C1412#text-spacing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Letter spacing should provide a readable experience",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Using negative letter-spacing  (especially lower than -1px) can be very difficult for certain vision impairments to interact with.",
    issueResolution:
      '<p>Do not use negative values in letter-spacing. Certain fonts look ok with up to -1px in letter spacing, but less than that is almost universally problematic.</p>\n<pre class="language-markup"><code>&lt;style&gt;\nbody * {\n    letter-spacing: 0;\n}\n&lt;/style&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "6206417744306b15b4367a3d",
    name: "Navigation Tagging",
    route: "navigation-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:57:54.000Z",
    modified: "2022-02-26T17:45:13.860Z",
    shortCode: "navigationTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Navigation elements should be tagged as landmarks",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users have different controls to help them browse to specific elements on the page like regions and landmarks such as navigations. To ensure that screen readers can provide that functionality, navigation regions should be tagged accordingly.",
    issueResolution:
      '<p>Add the&nbsp;<strong>role=navigation</strong> or code the navigation regions using the HTML&nbsp;<strong>NAV&nbsp;</strong>tag. Make sure to add an&nbsp;<strong>ARIA-LABEL</strong> to indicate the type of navigation. Is this the main navigation? Products navigation? Support navigation? No need to include the word <strong>"navigation"</strong> or <strong>"menu."</strong> Screen readers, by default, will announce that, like in the below example, which will be announced <strong>"Man\'s clothing navigation region".</strong></p>\n<pre class="language-markup"><code>&lt;nav aria-label="Man\'s clothing"&gt;\n    &lt;ul&gt;...&lt;/ul&gt;\n&lt;/nav&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "tag",
        suggestedFixKey: "",
        suggestedFixValue: "nav",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "{suggestion}",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620641f1f3d7a95964d1879a",
    name: "Broken Nav Tagging",
    route: "broken-nav-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:00:08.000Z",
    modified: "2022-02-26T18:42:17.044Z",
    shortCode: "brokenNavTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Avoid using role menu/menubar for navigation elements",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Using role=menu and role=menubar for navigation elements is a bad practice, and screen reader users, especially JAWS users, find it difficult to operate. Those menu types are better used in desktop applications than web applications.",
    issueResolution:
      "<p>Use <strong>role=navigation</strong> instead of&nbsp;<strong>role=menu/menubar</strong>. Alternatively, directly code the menu using the HTML&nbsp;<strong>NAV&nbsp;</strong>tag.</p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "role",
        suggestedFixValue: "navigation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62065382b0b1184e88c83831",
    name: "Popup Focus",
    route: "popup-focus",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:15:39.000Z",
    modified: "2022-02-27T19:24:44.310Z",
    shortCode: "popupFocus",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#keyboard-accessible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Keyboard focus should move into and lock inside active popups",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Popups that appear on pages without receiving keyboard focus immediately on interaction often block the entire page and make the website unusable for keyboard and screen reader users.",
    issueResolution:
      "<p>When a popup appears, use JavaScript to place the keyboard focus within the popup element. Note that popups are usually built using <strong>DIV</strong> and other elements that are not keyboard focusable by default (only interactive elements like buttons and links are). Therefore, adding <strong>tabindex=-1</strong> to the popup element will make the keyboard focusable, but not navigable using the Tab key, which you want to achieve. See the below code example:</p>\n<pre class=\"language-javascript\"><code>const popup = document.querySelector('.your-popup-selector');\npopup.setAttribute('tabindex', '-1');\npopup.focus();</code></pre>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "tabindex",
        suggestedFixValue: "-1",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62065412b0b1184e88c83835",
    name: "Noninteractive Tabindex",
    route: "noninteractive-tabindex",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:18:03.000Z",
    modified: "2022-02-27T19:04:57.054Z",
    shortCode: "noninteractiveTabindex",
    severity: "high",
    criteria: "keyboard",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Non-interactive elements should not be keyboard navigable",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Elements that are not clickable or hoverable using the mouse like headings, regular DIVs, text paragraphs, forms (not fields, and others should not receive keyboard focus. Otherwise, keyboard interaction in your website will be cluttered and difficult.",
    issueResolution:
      "<p>Remove the&nbsp;<strong>tabindex</strong> attribute from the non-interactive element.</p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "tabindex",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620574156199d73f9cf2aed7",
    name: "Column Table Headers",
    route: "column-table-headers",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:21:30.000Z",
    modified: "2022-03-27T18:54:24.699Z",
    shortCode: "columnTableHeaders",
    severity: "high",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Table column headers should be tagged properly for assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Every table should have properly coded column headers either as TH or using role=columnheader. Without properly tagged headers, screen readers won't be able to match the column and cell content and announce them properly to users.",
    issueResolution:
      '<p>Using <strong>TBODY </strong>and <strong>TD </strong>elements while visually making the first row look like headings can work for sighted users only. To make those headings work for assistive technology users, either code them as <strong>THEAD &gt; TH </strong>elements or add the <strong>role=columnheader</strong> attribute to the<strong> </strong><strong>TD </strong>elements that function as the headings to indicate to assistive technology that those are the column headers.</p>\n<pre class="language-markup"><code>&lt;table&gt;\n    &lt;tbody&gt;\n       &lt;tr&gt;\n            &lt;td role="columnheader"&gt;&lt;strong&gt;I\'m visually a column header&lt;/strong&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "columnheader",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058a726199d73f9cf2aedb",
    name: "Main Landmark",
    route: "main-landmark",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:57:02.000Z",
    modified: "2022-02-26T00:49:08.688Z",
    shortCode: "mainLandmark",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The main content area/section should be marked as a landmark",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users have different controls to help them browse directly to specific elements on the page while skipping other, less critical, or page-repetitive elements like the menu. The main content area is one landmark that should be properly tagged.",
    issueResolution:
      '<p>Where the main content on your page starts, give it&nbsp;<strong>role=main</strong> or engulf it with the&nbsp;<strong>MAIN&nbsp;</strong>HTML tag like in the example below:</p>\n<pre class="language-markup"><code>&lt;div role="main"&gt;\n    &lt;h1&gt;Main page heading&lt;/h1&gt;\n&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "main",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206427df3d7a95964d1879c",
    name: "Missing Nav Items",
    route: "missing-nav-items",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:01:47.000Z",
    modified: "2022-02-26T17:27:07.992Z",
    shortCode: "missingNavItems",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Always use a button or link and not only text nodes for navigation items",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Navigation items, whether their functionality is provided using JS (custom behavior) or HTML (links, navigation items should always be coded with a link, button tag, or div/span tags and not as direct text nodes on a parent element.",
    issueResolution:
      '<p>Always include a&nbsp;<strong>link, button</strong>, or <strong>span/div</strong> tags as navigation items and avoid using direct text nodes even if functionality is provided using JS.</p>\n<pre class="language-markup"><code>&lt;nav&gt;\n    &lt;ul&gt;\n        &lt;li&gt;Wrong: direct text node&lt;/li&gt;\n        &lt;li&gt;&lt;button&gt;Correct: direct HTML element&lt;/button&gt;&lt;/li&gt;\n    &lt;/ul&gt;\n&lt;/nav&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "",
        suggestedFixValue: "",
        suggestedFixHTML: '<a href="item link...">item text...</a>'
      }
    ]
  },
  {
    _id: "620650f1b0b1184e88c83824",
    name: "Aria Label Missuse",
    route: "aria-label-missuse",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:04:40.000Z",
    modified: "2022-02-26T20:34:51.488Z",
    shortCode: "ariaLabelMissuse",
    severity: "medium",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Aria labels should not be used on elements that has no roles",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers ignore aria labels on elements that don't have accessibility roles (button, region, link, etc.) if text exists. The aria-label will be announced only if the element doesn't have any text or has an accessibility role.",
    issueResolution:
      '<p>Use <strong>the screen-reader-only</strong> technique to add content to the element rather than an <strong>aria-label.</strong></p>\n<pre class="language-markup"><code>&lt;div&gt;\n    &lt;span class="sr-only"&gt;Screen reader only content&lt;/span&gt;\n    .......\n&lt;/div&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620653a5b0b1184e88c83832",
    name: "Skip Links",
    route: "skip-links",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:16:03.000Z",
    modified: "2022-02-27T13:17:03.748Z",
    shortCode: "skipLinks",
    severity: "high",
    criteria: "keyboard",
    WCAGLevel: "A",
    issueWCAGLink: "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Skip links should exist and be the first elements to receive keyboard focus",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Skip links are essential for keyboard and screen reader users to browse effectively. They allow users to skip repetitive blocks like the menu, and without them, users will have to browse through all the menus on every page before getting to the content.",
    issueResolution:
      '<p>Include a keyboard-navigable, anchor link as the first interactive element on the website. Make this anchor link point to the ID attribute of the section where the content of the page starts. You can make this link available only for screen readers and keyboard users, by hiding it using the CSS opacity attribute (set to 0, and on focus, set the opacity to 1 to make it visible.</p>\n<pre class="language-markup"><code>&lt;style&gt;\n.skip-link {\n    opacity: 0;\n}\n\n.pause-button:focus-visible {\n    opacity: 1;\n}\n&lt;/style&gt;\n\n&lt;body&gt;\n    &lt;a href="content" class="skip-link"&gt;Skip to content&lt;/a&gt;\n    .....\n    &lt;header&gt;&lt;/header&gt;\n    &lt;nav&gt;&lt;/nav&gt;\n    &lt;main&gt;\n        &lt;div id="content"&gt;\n            &lt;h1&gt;....&lt;/h1&gt;\n        &lt;/div&gt;\n        .....\n    &lt;/main&gt;\n    &lt;footer&gt;&lt;/footer&gt;\n&lt;/body&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "",
        suggestedFixValue: "",
        suggestedFixHTML: '<a href="#content">Skip to content</a>'
      }
    ]
  },
  {
    _id: "62058a8a6199d73f9cf2aedc",
    name: "Article Setup",
    route: "article-setup",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:58:10.000Z",
    modified: "2022-02-25T21:21:13.591Z",
    shortCode: "articleSetup",
    severity: "low",
    criteria: "context",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Article tags that aren't articles should lose their role",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Coding elements that aren't full-featured text articles, using the article HTML tag, make the screen reader user experience unnecessarily cluttered and verbose.",
    issueResolution:
      '<p>Use the <strong>role=presentation</strong> attributes to reset the standard accessibility article role of an element coded as an article while it isn\'t the full-featured text article. Another approach is simply changing the HTML tag from an article to something like a <strong>DIV.</strong></p>\n<pre class="language-markup"><code>&lt;article role="presentation"&gt;&lt;/article&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206340aacb7f0495c5df39e",
    name: "Custom Control Field",
    route: "custom-control-field",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:01:03.000Z",
    modified: "2022-02-26T15:53:01.815Z",
    shortCode: "customControlField",
    severity: "high",
    criteria: "forms",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Custom checkbox and radio inputs should be made accessible",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Screen readers have built-in mechanisms to handle checkboxes. By default, assistive technology does not support custom checkboxes, and using those may prevent screen reader users from interacting with the fields. ",
    issueResolution:
      '<p>If you are using standard <strong>LABEL </strong>and <strong>INPUT </strong>fields to design the custom checkbox using CSS, you need to ensure that the <strong>checkbox input </strong>is fully visible to assistive technology and the browser, but only visually hidden. To ensure that, you can hide it using opacity, width, height, and positioning, but <strong>never hide it using display=none or visibility=hidden.</strong></p>\n<pre class="language-markup"><code>&lt;div&gt;\n    &lt;label for="checkbox-input"&gt;Custom design&lt;/label&gt;\n    &lt;input type="checkbox" id="checkbox-input" style="position: absolute; top: -100%, left: -100%, opacity: 0; width: 0, height: 0;"&gt;\n&lt;/div&gt;</code></pre>\n<p>Alternatively, if you are using a completely custom checkbox mechanism without a standard checkbox input, create a standard select field with all the options and make it available only for screen readers using the <strong>screen reader only </strong>technique. Then, hide the custom select box from screen readers using <strong>aria-hidden=true.</strong> Don\'t forget to add the same functionality to this hidden field as your custom one.</p>\n<p>Using this method, screen readers will not "see" the custom field but will see the standard one and interact with it regularly.</p>\n<pre class="language-markup"><code>&lt;div class="checkbox" aria-hidden="true"&gt;✓&lt;/div&gt;\n&lt;input type="checkbox" class="sr-only"&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620642bef3d7a95964d1879d",
    name: "Missused Nav Tagging",
    route: "missused-nav-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:03:25.000Z",
    modified: "2022-02-26T18:36:21.056Z",
    shortCode: "missusedNavTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "A non-navigation element is improperly tagged as such",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers rely on accurate tagging and labeling to provide the necessary context to screen readers. If an element is tagged as a navigation landmark while it isn't, screen reader users will lose orientation and find the website difficult to use. ",
    issueResolution:
      "<p>Add the&nbsp;<strong>role=presentation</strong> attribute to the improper navigation element, or code it using a&nbsp;<strong>DIV</strong> tag rather than a&nbsp;<strong>NAV</strong> tag. Eliminate&nbsp;<strong>role=navigation</strong> if exists.</p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62065117b0b1184e88c83825",
    name: "Broken Aria Reference",
    route: "broken-aria-reference",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:05:06.000Z",
    modified: "2022-02-26T20:40:43.445Z",
    shortCode: "brokenAriaReference",
    severity: "high",
    criteria: "errors",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Aria describedby/labelledby must point to a valid, existing element ID",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers rely on the HTML to provide explicit references between elements in order to parse the content and announce it to screen readers correctly. If the HTML includes broken ARIA references, screen reader users may not be able to browse properly. ",
    issueResolution:
      '<p>Make sure that&nbsp;<strong>aria-describedby&nbsp;</strong>and&nbsp;<strong>aria-labeledby</strong> attributes point to an existing, screen-reader-visible element on the screen with proper text content.</p>\n<pre class="language-markup"><code>&lt;button aria-describedby="button-description"&gt;Load more&lt;/button&gt;\n&lt;span id="button-descriptionc"&gt;Additional gallery images will appear in a popup&lt;/span&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "62065199b0b1184e88c83828",
    name: "Load Autofocus",
    route: "load-autofocus",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:07:28.000Z",
    modified: "2022-02-26T20:48:32.158Z",
    shortCode: "loadAutofocus",
    severity: "high",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Avoid using autofocus",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "When using the autofocus HTML attribute screen reader, users will automatically be taken to the autofocus field. The screen reader will completely ignore everything else on the page that appears before that field, like the navigation and other essential elements.",
    issueResolution: "<p>Remove the&nbsp;<strong>autofocus</strong></p>",
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "",
        suggestedFixValue: "autofocus",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6205736e6199d73f9cf2aed5",
    name: "Table Layouts",
    route: "table-layouts",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:19:14.000Z",
    modified: "2022-03-27T18:53:51.293Z",
    shortCode: "tableLayouts",
    severity: "high",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Tables used for building layouts should lose table role",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users have a specific way of interacting and navigating within tables. If tables are used for layout purposes and not for displaying information, assistive technology users won't be able to browse them or consume their content.",
    issueResolution:
      '<p>Tables used for layout purposes should have their accessibility table role reset to presentation using the <strong>role=presentation </strong>attributes. This way, assistive technology will treat them as content blocks rather than tables.</p>\n<pre class="language-markup"><code>&lt;table role="presentation"&gt;&lt;/table&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "presentation",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058aba6199d73f9cf2aede",
    name: "Footer Landmark",
    route: "footer-landmark",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:58:55.000Z",
    modified: "2022-02-25T21:30:48.418Z",
    shortCode: "footerLandmark",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The footer should be labled as marked as a contentinfo landmark",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      'Screen reader users have different controls to help them browse directly to specific elements on the page while skipping other, less critical, or page-repetitive elements like the menu. The footer area, also known as "contentinfo," should be tagged appropriately.',
    issueResolution:
      '<p>Use the&nbsp;<strong>role=contentinfo</strong> alongside <strong>aria-label=footer</strong> attributes to indicate a footer contentinfo. Alternatively, you can code your footer using the <strong>FOOTER</strong><strong> HTML&nbsp;</strong>tag which by default is treated as the contentinfo landmark by screen readers.</p>\n<pre class="language-markup"><code>&lt;div role="contentinfo" aria-label="footer"&gt;&lt;/div&gt;\n&lt;footer&gt;&lt;/footer&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "role",
        suggestedFixValue: "contentinfo",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206419144306b15b4367a3e",
    name: "Breadcrumbs",
    route: "breadcrumbs",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:59:03.000Z",
    modified: "2022-02-26T17:47:57.389Z",
    shortCode: "breadcrumbs",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Breadcrumbs navigation should be tagged properly",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Breadcrumb navigation regions are essential for user orientation. If not appropriately tagged, screen reader users will not know that such an option exists on the page and will face more difficulties browsing around.",
    issueResolution:
      '<p>Add a&nbsp;<strong>role=navigation</strong> or code the breadcrumbs using the HTML <strong>NAV </strong>tag. This will indicate to screen readers that it is a navigation region. Lastly, add an <strong>aria-label=Breadcrumbs </strong>attribute so screen readers can announce that to users.</p>\n<pre class="language-markup"><code>&lt;nav aria-label="Breadcrumbs"&gt;&lt;/nav&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "tag",
        suggestedFixKey: "",
        suggestedFixValue: "nav",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "breadcrumbs",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206432ff3d7a95964d1879f",
    name: "Submenu Trigger Tagging",
    route: "submenu-trigger-tagging",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:05:51.000Z",
    modified: "2022-02-26T18:40:12.401Z",
    shortCode: "submenuTriggerTagging",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Sub-menu trigger buttons/links should be tagged properly",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    issueResolution:
      '<p>Use the <strong>aria-haspopup=true, </strong>directly on the link/button menu item that triggers the sub-menu, to indicate a sub-menu trigger. Add the <strong>aria-expanded=false </strong>attributes to indicate that this sub-menu can be expanded and collapsed (set true when expanded).</p>\n<pre class="language-markup"><code>&lt;ul&gt;\n    &lt;li&gt;\n        &lt;a href="..." aria-expanded="true/false" aria-haspopup="true"&gt;Products&lt;/a&gt;\n        &lt;div class="sub-menu"&gt;...&lt;/div&gt;\n    &lt;/li&gt;\n&lt;/ul&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-haspopup",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-expanded",
        suggestedFixValue: "false",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620652c5b0b1184e88c8382d",
    name: "Noticeable Focus",
    route: "noticeable-focus",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:12:29.000Z",
    modified: "2022-02-27T12:37:25.198Z",
    shortCode: "noticeableFocus",
    severity: "extreme",
    criteria: "keyboard",
    WCAGLevel: "AA",
    issueWCAGLink: "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Keyboard focus should be noticeable and distinctable",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Using Tab key navigation, interactive, focusable elements must have a noticeable outline around them to indicate that they are focused. Otherwise, keyboard users will lose orientation and won't know where they are at.",
    issueResolution:
      '<p>Use&nbsp;<strong>CSS</strong> outline to add noticeable keyboard focus to interactive elements.</p>\n<p>Often web designers refrain from including keyboard focus arguing that it distracts from the website\'s design and user interface for users who do not use a keyboard but a mouse or a touch screen.</p>\n<p>This can easily be solved using the CSS <strong>focus-visible&nbsp;</strong>pseudo class. This CSS feature will include certain CSS attributes on elements only if they are focused using the keyboard, and will not include it if they are focused using the mouse. See the example below:</p>\n<pre class="language-css"><code>// this will only show on keyboard focus \nbody *:focus-visible {\n    outline: solid 2px #6495ED;\n    outline-offset: 5px;\t\n}\n\n// this will only show on both keyboard and mouse focus\nbody *:focus {\n    outline: solid 2px #6495ED;\n    outline-offset: 5px;\t\n}</code></pre>',
    suggestedFix: []
  },
  {
    _id: "6204f42c676c2425ec000531",
    name: "Page Title",
    route: "page-title",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T11:15:42.000Z",
    modified: "2022-03-27T18:48:33.514Z",
    shortCode: "pageTitle",
    severity: "extreme",
    criteria: "document",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412%2C242#page-titled",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The HEAD element should include a descriptive page title ",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "The document/page title is the first bit of context announced to screen reader users when a page loads. Without a properly descriptive document title, screen readers users won't know which page they've landed on.",
    issueResolution:
      '<p>Include a descriptive title tag in the head portion of your HTML, on every page of your website.</p>\n<pre class="language-markup"><code>&lt;head&gt;\n&lt;title&gt;I\'m the page title&lt;/title&gt;\n...\n&lt;/head&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "620573ca6199d73f9cf2aed6",
    name: "Headless Tables",
    route: "headless-tables",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:19:58.000Z",
    modified: "2022-03-27T18:54:12.909Z",
    shortCode: "headlessTables",
    severity: "high",
    criteria: "tables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Tables should include table header tags",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers can't match columns and cells without properly coded table header tags (TH). Without table headers, screen readers won't announce the table's content properly to users, leaving them unable to consume information.",
    issueResolution:
      '<p>Add a <strong>THEAD </strong>element to indicate a table heading section, and include <strong>TH&nbsp;</strong>elements for every column, describing the purpose of that table column.&nbsp;</p>\n<pre class="language-markup"><code>&lt;thead&gt;\n    &lt;tr&gt;\n        &lt;th&gt;Header1&lt;/th&gt;\n        &lt;th&gt;Header2&lt;/th&gt;\n        &lt;th&gt;Header3&lt;/th&gt;\n    &lt;/tr&gt;\n&lt;thead&gt;</code></pre>',
    suggestedFix: []
  },
  {
    _id: "62065146b0b1184e88c83826",
    name: "Redundant Aria Labels",
    route: "redundant-aria-labels",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T12:05:53.000Z",
    modified: "2022-02-26T20:44:33.460Z",
    shortCode: "redundantAriaLabels",
    severity: "low",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Aria-label is redundant when it has the same value as the content",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Aria labels are used to label elements without text, like icons and fields. Providing the exact text of an element in an aria-label is redundant and potentially dangerous because content changes as updates roll out, and the aria-label can become misleading.",
    issueResolution: "<p>Remove the&nbsp;<strong>aria-label.</strong></p>",
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "aria-label",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6204f180676c2425ec00052f",
    name: "Empty Links",
    route: "empty-links",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T11:03:47.000Z",
    modified: "2022-03-27T18:47:52.802Z",
    shortCode: "emptyLinks",
    severity: "high",
    criteria: "clickables",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Empty links should indicate their location or excluded from assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: false,
    issueDescription:
      "Screen reader users need to figure out a link's destination based on the text or a coded label. This is because they interact with one element at a time and don't see visual cues that provide more context.",
    issueResolution:
      '<p>Use an aria-label or the screen-reader-only text technique to provide links with extra context regarding &nbsp;their destination and functionality like in the example below:</p>\n<pre class="language-markup"><code>&lt;a href="...."&gt;&lt;span class="sr-only"&gt;Blog article: 10 different ways to...&lt;/span&gt;&lt;/a&gt;\n&lt;a href="...." aria-label="Blog article: 10 different ways to..."&gt;&lt;/a&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-label",
        suggestedFixValue: "",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620570c26199d73f9cf2aeca",
    name: "Color Contrast",
    route: "color-contrast",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T20:07:54.000Z",
    modified: "2022-03-27T18:50:24.818Z",
    shortCode: "colorContrast",
    severity: "medium",
    criteria: "readability",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#contrast-minimum",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "The color contrast ratio between text and its background should provide a readable experience",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "The color contrast between the foreground and the background elements needs to meet a ratio of at least 4.5:1 for standard text. For large text above 18px font size, a lower ratio of 3:1 can be met, but it is recommended to remain with 4:5:1 in any case.",
    issueResolution:
      '<p>Work with the website\'s designers to choose colors that properly meet the minimum contrast ratio requirements. To check color contrast with different potential colors, use Webaim\'s contrast checker: <a href="https://webaim.org/resources/contrastchecker" target="_blank" rel="noopener">https://webaim.org/resources/contrastchecker</a></p>',
    suggestedFix: []
  },
  {
    _id: "620589f86199d73f9cf2aed9",
    name: "Sale Prices",
    route: "sale-prices",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:53:24.000Z",
    modified: "2022-02-25T21:02:42.658Z",
    shortCode: "salePrices",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Old sale prices should be indicated to assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: false,
    issueDescription:
      "Websites often show two numbers to indicate a sale. The original price, and then the sale price. Blind screen reader users don't see visual cues to know the difference and will hear two numbers without knowing which is correct or if there's an issue on the page.  ",
    issueResolution:
      '<p>Add a screen-reader-only text element inside the original price element to indicate that this is, in fact, an old or the original price. This way, screen reader users will understand that the other price is current.</p>\n<pre class="language-markup"><code>&lt;div&gt;$100 &lt;span class="sr-only"&gt;Original price&lt;/span&gt;&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "Original price",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62058a2e6199d73f9cf2aeda",
    name: "User Rating",
    route: "user-rating",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-10T21:56:18.000Z",
    modified: "2022-02-25T21:04:01.729Z",
    shortCode: "userRating",
    severity: "high",
    criteria: "context",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "User rating should be tagged properly for assistive technology",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "When showing customer satisfaction using a visual rating system like  1-5 star indication, we need to indicate the rating as text, so screen readers users will be able to learn about it when researching a product or service.",
    issueResolution:
      '<p>Add a screen-reader-only text element to indicate the aggregated, final rating, inside the rating system element like in the example below:</p>\n<pre class="language-markup"><code>&lt;div&gt;\n★★★★★ &lt;span class="sr-only"&gt;5/5 rating&lt;/span&gt;\n&lt;/div&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "{suggestion} rating",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "6206338cacb7f0495c5df39b",
    name: "Field Required",
    route: "field-required",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T09:59:07.000Z",
    modified: "2022-02-26T11:51:16.780Z",
    shortCode: "fieldRequired",
    severity: "high",
    criteria: "forms",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#error-suggestion",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Required fields must be tagged as such for assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen reader users need to know if a field is required when interacting with it. Otherwise, screen reader users will need to go back and forth to understand why their submission attempt doesn't work as expected.",
    issueResolution:
      '<p>Add the&nbsp;<strong>aria-required=true</strong> attribute to indicate to screen readers that a field is required and the form won\'t submit without it.</p>\n<pre class="language-markup"><code>&lt;input aria-required="true"&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-required",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "620633b0acb7f0495c5df39c",
    name: "Form Duplicate IDs",
    route: "form-duplicate-ids",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T09:59:40.000Z",
    modified: "2022-02-26T12:14:00.688Z",
    shortCode: "formDuplicateIDs",
    severity: "medium",
    criteria: "forms",
    WCAGLevel: "AA",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription: "Forms and form fields must have unique ID attributes",
    addSROnlyCSS: false,
    saveSuccesses: false,
    issueDescription:
      "Screen readers rely on ID attributes to be unique in order to announce to the users the correct content. If IDs are not unique, screen readers won't know which element is the correct one.",
    issueResolution:
      "<p>Change the ID of the duplicate fields and forms so they are unique.</p>",
    suggestedFix: []
  },
  {
    _id: "6206410244306b15b4367a3b",
    name: "Submenu State",
    route: "submenu-state",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T10:56:28.000Z",
    modified: "2022-02-26T17:22:24.436Z",
    shortCode: "submenuState",
    severity: "high",
    criteria: "navigation",
    WCAGLevel: "A",
    issueWCAGLink:
      "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Sub menu open/close states should be indicated to assistive technology",
    addSROnlyCSS: false,
    saveSuccesses: true,
    issueDescription:
      "Screen readers require properly coded states for interactive elements. Submenus can be expanded or collapsed, and their state should be indicated to screen readers. Otherwise, users will lose orientation and get confused while browsing the menu.",
    issueResolution:
      '<p>Use the <strong>aria-haspopup=true</strong> to indicate a sub-menu trigger, and the <strong>aria-expanded=true</strong> to indicate expanded sub-menus and <strong>aria-expanded=false</strong> to indicate collapsed sub-menus. Make sure to switch between&nbsp;<strong>true </strong>and <strong>false</strong> dynamically as users interact, open and close sub-menus.</p>\n<p><strong>Note:</strong> the <strong>aria-expanded</strong> attribute must be placed on the&nbsp;<strong>link&nbsp;</strong>or&nbsp;<strong>button&nbsp;</strong>menu items only. Otherwise, they won\'t work.</p>\n<pre class="language-markup"><code>&lt;ul&gt;\n    &lt;li&gt;\n        &lt;a href="..." aria-expanded="true/false" aria-haspopup="true"&gt;Products&lt;/a&gt;\n        &lt;div class="sub-menu"&gt;...&lt;/div&gt;\n    &lt;/li&gt;\n&lt;/ul&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-expanded",
        suggestedFixValue: "false",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "attribute",
        suggestedFixKey: "aria-haspopup",
        suggestedFixValue: "true",
        suggestedFixHTML: ""
      }
    ]
  },
  {
    _id: "62064fbf807c385bb8e74a7f",
    name: "Title Missuse",
    route: "title-missuse",
    ordering: 9999999,
    owner: {
      value: "61bf9f03fb0f852408e25252",
      selected: null,
      key: "name",
      type: "standard",
      collection: "users"
    },
    enabled: true,
    themeCtrl: null,
    theme: {
      value: null,
      selected: null,
      key: "name",
      type: "standard",
      collection: "themes"
    },
    date: "2022-02-11T11:59:22.000Z",
    modified: "2022-02-26T20:16:27.769Z",
    shortCode: "titleMissuse",
    severity: "low",
    criteria: "errors",
    WCAGLevel: "none",
    issueWCAGLink: "-",
    issueTutorialLink: "https://accessibe.com/support/knowledgebase",
    shortDescription:
      "Title attributes should not be used to deliver information",
    addSROnlyCSS: true,
    saveSuccesses: true,
    issueDescription:
      "Screen readers do not announce content inside title tags. They only show it when using certain screen reader features. Therefore it should not be used to deliver information to the user, or else users will most likely miss that information.",
    issueResolution:
      '<p>Use the&nbsp;<strong>screen-reader-only&nbsp;</strong>technique to provide information instead of the title attribute. Create a <strong>screen-reader-only </strong>element and put it inside the tag you originally intended to use a title attribute on.</p>\n<p>If the mentioned tag is self-closing, e.g no closing required like input and img, add the content as an <strong>aria-label</strong> instead of a <strong>screen-reader-only </strong>element.</p>\n<pre class="language-markup"><code>&lt;span class="sr-only"&gt;Content goes here...&lt;/span&gt;</code></pre>',
    suggestedFix: [
      {
        suggestedFixType: "removeAttribute",
        suggestedFixKey: "",
        suggestedFixValue: "title",
        suggestedFixHTML: ""
      },
      {
        suggestedFixType: "srOnly",
        suggestedFixKey: "",
        suggestedFixValue: "Complementary text here instead of title...",
        suggestedFixHTML: ""
      }
    ]
  }
];
