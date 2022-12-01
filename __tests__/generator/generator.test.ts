import { describe, test, expect } from "@jest/globals";
import { Generator } from "../../src/generator/generator";
import { Commit } from "../../src/git/log";

describe("generator test", () => {
  const log: Commit[] = [
    {
      hash: "d49b398cfca0376c83adb89d25df18f857b901e7",
      parents:
        "88d9f36e8aef3f4ecd043511ec5a871775d6c1a5 167616ac2a9defb49e149757f4a865330cec2c4f",
      date: "2022-11-25T19:15:00+08:00",
      message: "v1.1.4 (#213)",
      refs: "HEAD -> master, upstream/master, origin/master, origin/HEAD",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "88d9f36e8aef3f4ecd043511ec5a871775d6c1a5",
      parents:
        "730d752a1e37e3d9c490fef85bd92e266b8428f2 13d2a9099094e2e835270920998a6655843d39d9",
      date: "2022-11-24T13:53:33+08:00",
      message: "feat(frontend): list UI improvement (#212)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "730d752a1e37e3d9c490fef85bd92e266b8428f2",
      parents:
        "7cea2909f95aaa10c1bd1707556d295ab8d63b28 d5d2448c9d1beb6a8a45f2cacd7de3920e0d7081",
      date: "2022-11-24T13:40:17+08:00",
      message: "fix(frontend): invalid route in ReviewFrame (#210)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "7cea2909f95aaa10c1bd1707556d295ab8d63b28",
      parents:
        "335612b64850585b9a0e440ed4d11975040de166 45e36bbf2c6329c0cd284802f753091b78c13601",
      date: "2022-11-23T20:12:24+08:00",
      message: "v1.1.3 (#208)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "335612b64850585b9a0e440ed4d11975040de166",
      parents:
        "f3f68694208808942bc74a2634f60d2b293db3c0 65ed476172670dcc71467a4b91d96c50cceec17e",
      date: "2022-11-23T17:58:24+08:00",
      message:
        "refactor(frontend): direct call api endpoint instead of calling wrapper (#207)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "f3f68694208808942bc74a2634f60d2b293db3c0",
      parents:
        "88df1a627ec8884b17a1718e3c04a5f0d178674b 44cd0b21b2c952d3e67860d970e57e280c7b7265",
      date: "2022-11-22T22:10:14+08:00",
      message: "v1.1.2 (#206)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "88df1a627ec8884b17a1718e3c04a5f0d178674b",
      parents:
        "15e4df3cbe8254930e9fdfad7d7f3e26fe8dced3 04efbeb9be55f6d877fe6cdd5c3e576d3937950c",
      date: "2022-11-22T21:53:38+08:00",
      message: "refactor(frontend): paginator state management (#205)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "15e4df3cbe8254930e9fdfad7d7f3e26fe8dced3",
      parents:
        "c1e1864868986a359c9737fae4ac0d7c829f5726 189f576ac8b5b6e9de7597eb6320287cb61afbef",
      date: "2022-11-22T21:09:29+08:00",
      message:
        "fix(frontend): page number isn't reset when changing filter (#203)",
      refs: "",
      body:
        "## Introduction\r\n" +
        "\r\n" +
        "expose `searchOptions` would cause auto emits, so I implement v-model as\r\n" +
        "a replacement.\r\n" +
        "\r\n" +
        "## Related Issues\r\n" +
        "\r\n" +
        "Fix #202.",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "c1e1864868986a359c9737fae4ac0d7c829f5726",
      parents:
        "f4da3dfb2fecf0adc21eec883976c652dc3713e2 f13838c5512e82d7ea9bf1cf5997f9f7c30319cf",
      date: "2022-11-22T16:35:30+08:00",
      message: "fix: feedback page params validation (#201)",
      refs: "",
      body: "## Related Issues\r\n\r\nResolves #198. ",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "f4da3dfb2fecf0adc21eec883976c652dc3713e2",
      parents:
        "49067b1a9efa7fded46d6c4d8747aac9529cdb52 0f7990a7373d34d1b951be459e37333d116d821d",
      date: "2022-11-22T14:08:57+08:00",
      message: "feat: search engine friendly CoursesSearch (#199)",
      refs: "",
      body: "## Related Issues\r\n\r\nCloses #188.",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "49067b1a9efa7fded46d6c4d8747aac9529cdb52",
      parents:
        "ac5abf0f84f7c5119a616d3500faee6952480acd 8e5a7bd2615e33ed28b37e4d02e235e475396cdf",
      date: "2022-11-22T13:27:10+08:00",
      message: "fix: page value is inconsistent (#197)",
      refs: "",
      body: "## Related Issues\r\n\r\nFix #196.",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "ac5abf0f84f7c5119a616d3500faee6952480acd",
      parents:
        "849299bcd86b0be88ed831c371d88ed32038e455 21951ede014cbd930198c11c64e15963c69c826f",
      date: "2022-11-21T13:45:10+08:00",
      message: "fix: course feedback test failed sometime (#195)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "849299bcd86b0be88ed831c371d88ed32038e455",
      parents:
        "2d04d5dd928f1939d585d1caeb2b6045382f69a6 459741c696a1396846dcd6464896bab12cdac5a2",
      date: "2022-11-21T12:26:42+08:00",
      message: "v1.1.1 (#194)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "2d04d5dd928f1939d585d1caeb2b6045382f69a6",
      parents:
        "ccf8095a140498c5c23ee10a2e1a7a5a9d35aa3d 5a3c0a3d1de9d0707b3240fc6d81400fe2902d10",
      date: "2022-11-21T11:47:47+08:00",
      message: "chore: remove unnecessary files (#193)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "ccf8095a140498c5c23ee10a2e1a7a5a9d35aa3d",
      parents:
        "a6a27e36198e2536c941f54640165731a3d7f760 6f71c7a6e92707be036d458dfadf0fb199bccd5a",
      date: "2022-11-21T11:27:29+08:00",
      message: "chore(deps): update pnpm to v7.17.0 (#190)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "a6a27e36198e2536c941f54640165731a3d7f760",
      parents:
        "9fc4ec20535b95d84c97c42723c05422c1816e1f fd2a1bd1ea9b32b90962ec9e1649d85a31573677",
      date: "2022-11-21T11:22:28+08:00",
      message: "fix: show wrong page when user view feedback and back (#192)",
      refs: "",
      body: "## Related Issues\r\n\r\nResolves #189. ",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "9fc4ec20535b95d84c97c42723c05422c1816e1f",
      parents:
        "a08223fa0d1415ab9311a937eca51355ff23f56e 94b9a14d47b4e117341d1d38eaf6c541dbede533",
      date: "2022-11-21T10:43:54+08:00",
      message: "fix: wrong dev proxy setting (#191)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
    {
      hash: "a08223fa0d1415ab9311a937eca51355ff23f56e",
      parents:
        "1c223b8dfa81ba254af86b0e80a1fd3874599154 ef1f8c1752c9e39a2b49e673592246b7f31861a6",
      date: "2022-11-21T01:48:46+08:00",
      message: "v1.1.0 (#187)",
      refs: "",
      body: "",
      commiterName: "GitHub",
      commiterEmail: "noreply@github.com",
      authorName: "ppodds",
      authorEmail: "oscar20020629@gmail.com",
    },
  ];

  test("generate a release note", () => {
    const generator = new Generator(log, {
      prTypes: [
        { identifier: "feat", title: "🚀 Enhancements" },
        { identifier: "fix", title: "🩹 Fixes" },
        { identifier: "docs", title: "📖 Documentation" },
        { identifier: "chore", title: "🏡 Chore" },
        { identifier: "refactor", title: "💅 Refactors" },
        { identifier: "test", title: "✅ Tests" },
      ],
      template: `## 📝 Changelog

<!-- changes -->

### {{ title }}

<!-- commits -->
- {{ messageWithoutPRType }}
<!-- commits -->

<!-- changes -->
`,
    });
    expect(generator.generate()).toEqual(`## 📝 Changelog


### 🚀 Enhancements

- list UI improvement (#212)
- search engine friendly CoursesSearch (#199)


### 🩹 Fixes

- invalid route in ReviewFrame (#210)
- page number isn't reset when changing filter (#203)
- feedback page params validation (#201)
- page value is inconsistent (#197)
- course feedback test failed sometime (#195)
- show wrong page when user view feedback and back (#192)
- wrong dev proxy setting (#191)


### 🏡 Chore

- remove unnecessary files (#193)
- update pnpm to v7.17.0 (#190)


### 💅 Refactors

- direct call api endpoint instead of calling wrapper (#207)
- paginator state management (#205)

`);
  });
});
