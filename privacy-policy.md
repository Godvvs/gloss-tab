# 隐私政策 · Privacy Policy

**AI Gloss Tab** · 版本 0.1.0
最后更新：2026-04-17

---

## 中文版

### 一句话概述

**AI Gloss Tab 不收集、不存储、不上传任何用户数据到任何远程服务器**。所有功能完全在浏览器本地运行，你的 AI 对话内容不会离开你的设备。

### 我们不做什么

- 不收集你的 AI 对话内容
- 不收集你的账号信息、邮箱、IP 地址
- 不使用 Cookie、LocalStorage 或其他跟踪技术（除浏览器扩展标准的 `chrome.storage`，下文详述）
- 不调用任何远程 API、不与任何外部服务器通信
- 不使用 Google Analytics、Sentry、Mixpanel 等分析工具
- 不展示任何广告

### 我们在本地存储什么

扩展仅在**你当前浏览器的 `chrome.storage.local`**（本地存储，不同步，不上传）里保存以下偏好设置：

| 字段 | 用途 | 示例值 |
|---|---|---|
| `theme` | 主题偏好 | `"system"` / `"light"` / `"dark"` |
| `lang` | 界面语言 | `"zh"` / `"en"` |
| `components.timeline` | 是否启用时间线 | `true` / `false` |
| `components.copy` | 是否启用复制增强 | `true` / `false` |
| `components.pet` | 是否启用浮标 | `true` / `false` |
| `railPosition.right` | 时间线水平位置（px） | `10` |
| `railPosition.vCenter` | 时间线垂直中心（%） | `50` |

这些数据**永远只存在于你的浏览器本地**，扩展卸载时随浏览器清理。

### 内容脚本的行为

扩展会在以下 9 个 AI 对话平台的页面上运行内容脚本（Content Script）：

- ChatGPT（chatgpt.com, chat.openai.com）
- Claude（claude.ai）
- Gemini（gemini.google.com）
- DeepSeek（chat.deepseek.com）
- Kimi（kimi.moonshot.cn, kimi.com）
- 通义千问（tongyi.aliyun.com）
- 豆包（doubao.com）
- 腾讯元宝（yuanbao.tencent.com）
- 百度一言（yiyan.baidu.com）

**内容脚本会做什么**：

- 读取页面 DOM 结构，解析出对话消息（用于右侧时间线导航与搜索）
- 监听用户点击扩展注入的按钮，执行本地格式转换后调用 `navigator.clipboard` 写入剪贴板
- 在页面注入 Shadow DOM（隔离样式），渲染时间线、复制按钮与浮标

**内容脚本不会做什么**：

- 不通过网络发送任何对话内容
- 不把 DOM 结构上传到任何服务器
- 不访问其他标签页或无关的网页

### 第三方资源

扩展打包了以下第三方库和字体，全部在扩展安装包内**本地提供**，**不调用任何 CDN 或远程资源**：

- **字体**：Fraunces、Quicksand（SIL OFL 1.1 许可）
- **公式渲染**：KaTeX（MIT）、MathJax（Apache 2.0）
- **截图导出**：html2canvas-pro（MIT）

详见 [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md)。

### 权限说明

| 权限 | 用途 |
|---|---|
| `activeTab` | 检测当前标签页的 URL，判断是否在支持的 AI 平台 |
| `storage` | 保存用户偏好（见上文存储字段） |
| `host_permissions` | 允许在 9 个 AI 平台的域名上注入内容脚本 |

扩展**没有**申请 `tabs` / `cookies` / `history` / `downloads` 等更高权限。

### 联系方式

如对本政策有任何疑问，请在 GitHub 项目的 Issue 区反馈：
<https://github.com/xiao/ai-gloss-tab>（待补充实际 URL）

---

## English Version

### TL;DR

**AI Gloss Tab does not collect, store, or transmit any user data to any remote server.** All features run entirely in your browser; your AI conversation content never leaves your device.

### What we DON'T do

- We do not collect your AI conversation content
- We do not collect account info, email addresses, or IP addresses
- We do not use cookies, LocalStorage, or other tracking technologies (except the standard `chrome.storage`, detailed below)
- We do not call any remote APIs or communicate with any external server
- We do not use Google Analytics, Sentry, Mixpanel, or similar analytics tools
- We do not show any ads

### What we store locally

The extension saves only the following preferences in your browser's `chrome.storage.local` (local storage, not synced, not uploaded):

| Field | Purpose | Example |
|---|---|---|
| `theme` | Theme preference | `"system"` / `"light"` / `"dark"` |
| `lang` | UI language | `"zh"` / `"en"` |
| `components.timeline` | Timeline enabled | `true` / `false` |
| `components.copy` | Copy enhancements enabled | `true` / `false` |
| `components.pet` | Floating badge enabled | `true` / `false` |
| `railPosition.right` | Timeline horizontal position (px) | `10` |
| `railPosition.vCenter` | Timeline vertical center (%) | `50` |

These settings live **only in your local browser** and are cleared when you uninstall the extension.

### Content script behavior

The extension runs a content script on 9 AI chat platforms:

- ChatGPT (chatgpt.com, chat.openai.com)
- Claude (claude.ai)
- Gemini (gemini.google.com)
- DeepSeek (chat.deepseek.com)
- Kimi (kimi.moonshot.cn, kimi.com)
- Tongyi Qianwen (tongyi.aliyun.com)
- Doubao (doubao.com)
- Tencent Yuanbao (yuanbao.tencent.com)
- Baidu Yiyan (yiyan.baidu.com)

**The content script will**:

- Read the page DOM structure to parse conversation messages (used for timeline navigation and search)
- Listen for clicks on injected buttons, then run local format conversion and call `navigator.clipboard`
- Inject Shadow DOM (isolated styles) to render the timeline, copy buttons, and floating badge

**The content script will NOT**:

- Transmit any conversation content over the network
- Upload the DOM structure to any server
- Access other tabs or unrelated web pages

### Third-party resources

The extension bundles the following third-party libraries and fonts **locally in the installation package**, with **no CDN or remote resource calls**:

- **Fonts**: Fraunces, Quicksand (SIL OFL 1.1)
- **Formula rendering**: KaTeX (MIT), MathJax (Apache 2.0)
- **Screenshot export**: html2canvas-pro (MIT)

See [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md) for full attribution.

### Permissions

| Permission | Purpose |
|---|---|
| `activeTab` | Detect the current tab URL to check if it's on a supported AI platform |
| `storage` | Save user preferences (see storage fields above) |
| `host_permissions` | Allow content script injection on 9 AI platform domains |

The extension does **not** request `tabs` / `cookies` / `history` / `downloads` or any higher-tier permissions.

### Contact

For questions about this policy, please open an issue on the GitHub project:
<https://github.com/xiao/ai-gloss-tab> (URL to be finalized)
