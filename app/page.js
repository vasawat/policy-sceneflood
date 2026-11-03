import { Badge, Button, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { IconArrowUpRight, IconMail, IconSparkles } from '@tabler/icons-react';
import styles from './policy.module.css';

const contactEmail = 'dinowebcreate@gmail.com';

export const metadata = {
  title: 'Privacy Policy | SceneFlood',
  description: 'How SceneFlood collects, uses, shares, retains, and protects information.',
};

const sections = [
  { id: 'scope', title: '1. Scope and who we are', body: <>
    <p>SceneFlood (“SceneFlood,” “we,” “us,” or “our”) provides tools for planning, generating, editing, storing, and publishing creative content. This Privacy Policy applies to the SceneFlood website, accounts, application, and related services (the “Service”). It explains our practices when you visit the Service, create an account, connect a third-party platform, upload material, generate content, make a payment, or contact us.</p>
    <p>SceneFlood is the operator of the Service. For privacy questions and requests, contact <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. The Service may be used by creators who independently decide what content to produce and publish. Those creators remain responsible for the content and personal information they choose to provide to us or publish to other platforms.</p>
  </> },
  { id: 'information', title: '2. Information we collect', body: <>
    <p><strong>Account and profile information.</strong> We collect an email address, name when provided, account identifiers, profile image when provided by a sign-in provider, account role, package, credit balance, and account settings. If you register with a password, we store a password hash rather than the original password. If you sign in with Google, we receive the profile information you authorize Google to provide.</p>
    <p><strong>Connected platform information.</strong> When you connect Google or YouTube, Facebook or Instagram through Meta, or TikTok, we receive identifiers and basic account or channel details needed to display and manage the connection. Depending on your authorization, this may include a channel or Page name, handle, profile image, linked Instagram account, granted permissions, account status, access tokens, refresh tokens, and token expiry information. We access only the platform information needed for features you choose to use and subject to the permissions you grant.</p>
    <p><strong>Creative inputs and outputs.</strong> We process topics, scripts, prompts, descriptions, titles, captions, settings, uploaded images, audio, video, voice samples or references, generated images and audio, video files, subtitles, thumbnails, project records, production jobs, and publication history. Content you provide may contain personal information about you or others. Please do not submit sensitive information or another person&apos;s private material unless you have the rights and authority to do so.</p>
    <p><strong>Payment and transaction information.</strong> We record purchases, credit transactions, package information, and payment provider reference IDs. Payment checkout is handled by Stripe. We do not need your full payment card number to operate the Service.</p>
    <p><strong>Technical and usage information.</strong> Our servers may process IP addresses, device and browser details, request times, pages or features used, error information, and security logs when you use the Service. We also use cookies needed to keep you signed in and to complete sign-in flows.</p>
    <p><strong>Communications.</strong> If you email us, we receive your email address and the information you include in your message, and may retain correspondence needed to respond and maintain a record of the request.</p>
  </> },
  { id: 'sources', title: '3. Where information comes from', body: <>
    <p>We receive information directly from you; from your use of the Service; from Google, Meta, TikTok, and other services you choose to connect; from payment processors; and from service providers that help us host, run, secure, and troubleshoot the Service. When you authorize a platform connection, that platform determines which information and permissions are available to SceneFlood.</p>
  </> },
  { id: 'uses', title: '4. How we use information', body: <>
    <ul>
      <li>Create and secure accounts, authenticate users, maintain sessions, and manage access.</li>
      <li>Connect accounts and show available Pages, channels, profiles, and publishing destinations.</li>
      <li>Generate or process scripts, images, speech, audio, video, captions, thumbnails, and related creative assets at your request.</li>
      <li>Save projects, preferences, job progress, files, and history so you can continue and manage your work.</li>
      <li>Publish or schedule content to connected services when you direct us to do so, and retrieve status or performance information needed for enabled features.</li>
      <li>Process payments, allocate credits, maintain transaction records, and address billing issues.</li>
      <li>Provide support, diagnose failures, prevent abuse, protect the Service, and comply with applicable obligations.</li>
    </ul>
    <p>We do not sell your personal information. We do not use connected platform tokens to publish content without a feature or action you have enabled, such as a manual upload or an automation you configure.</p>
  </> },
  { id: 'platforms', title: '5. Google, YouTube, Meta, Instagram, and TikTok connections', body: <>
    <p><strong>Google and YouTube.</strong> If you connect a Google account or YouTube channel, SceneFlood may use the authorization you grant to identify your channel, upload or manage videos and related content, and display channel or video information for the features you use. Google account information used for sign-in is also used to maintain your SceneFlood account. You can manage access in your Google account settings.</p>
    <p><strong>Facebook and Instagram.</strong> If you connect Meta, SceneFlood may access the Facebook Pages you manage and linked Instagram professional accounts, including identifiers, names, usernames, profile images, permissions, and access tokens. We use this information to show destinations and to publish videos, Reels, captions, and related media when you request or enable publication. We may read publishing results and account status to manage retries and display outcomes. Disconnecting the account in SceneFlood removes the stored Meta connection; you can also review or revoke the app&apos;s access in your Meta account settings.</p>
    <p><strong>TikTok.</strong> If you connect TikTok, SceneFlood may use your authorized account details and tokens to identify the account, upload content, and show publishing status for enabled features. You can disconnect TikTok in SceneFlood or manage authorization with TikTok.</p>
    <p>Each connected platform has its own privacy policy and controls. Content you publish to those platforms is governed by their policies and the audience settings that apply there. Disconnecting a platform does not automatically remove content already published on that platform.</p>
  </> },
  { id: 'ai', title: '6. AI and media processing', body: <>
    <p>SceneFlood may send the inputs needed for a requested task to providers of AI, speech, image, audio, transcription, video, and cloud processing services. Depending on the feature and configuration, these inputs may include prompts, scripts, images, reference materials, voice samples, audio, video, or generated assets. Providers or tools used by the Service may include Google AI and cloud services, Anthropic, ElevenLabs, local speech and image processing services, and hosting or storage providers. The provider used can vary by feature and configuration.</p>
    <p>These providers process information to deliver the requested output and may handle it under their own terms and privacy notices. Do not upload material you are not authorized to process. AI outputs may be inaccurate or may contain unintended personal information; review them before publishing.</p>
  </> },
  { id: 'sharing', title: '7. When we disclose information', body: <>
    <p>We disclose information only as reasonably needed to operate the Service: to connected platforms when you publish or use an integration; to cloud hosting, storage, media processing, AI, email or support, security, and payment service providers; to people you choose to share or publish content with; and when required to comply with law, protect rights and safety, or investigate misuse. If the Service is transferred as part of a business transaction, relevant information may transfer subject to appropriate safeguards and notice where required.</p>
    <p>We do not provide third parties with your connected-platform access tokens for their independent marketing purposes.</p>
  </> },
  { id: 'cookies', title: '8. Cookies and similar technologies', body: <>
    <p>SceneFlood uses an authentication cookie to keep you signed in and a short-lived cookie during sign-in to protect the authorization flow. The application may also rely on ordinary browser and server technologies needed to load pages, maintain preferences, and protect against misuse. Your browser may let you block or delete cookies, but doing so can interrupt sign-in or other Service functions.</p>
  </> },
  { id: 'retention', title: '9. Retention and deletion', body: <>
    <p>We keep account information, connected-account records, projects, generated media, job history, and transaction records while they are needed to provide the Service and for legitimate operational, security, accounting, or legal purposes. The exact period depends on the data and the reason it is held. Backups and logs may persist for a limited period after active records are removed. We do not promise that disconnecting an integration deletes every project, published post, or transaction associated with it.</p>
    <p>You may remove content using available Service controls, disconnect connected accounts, or request account and personal-data deletion by emailing <a href={`mailto:${contactEmail}?subject=SceneFlood%20data%20deletion%20request`}>{contactEmail}</a> with the subject “SceneFlood data deletion request.” Include the email address used for your SceneFlood account and identify any connected Page or channel you want us to locate. Do not send passwords or access tokens by email. We may verify that you control the account before acting. We will explain any information that must be retained for a valid legal, security, or accounting reason. Removing SceneFlood data does not remove copies you have already published to Facebook, Instagram, YouTube, TikTok, or elsewhere; use the relevant platform&apos;s controls for those copies.</p>
  </> },
  { id: 'security', title: '10. Security', body: <>
    <p>We use technical and organizational measures intended to protect information, including access controls, password hashing, authenticated sessions, and secured connections where supported by the deployment. No method of transmission or storage is completely secure. Please protect your account credentials, review permissions granted to connected services, and notify us if you believe your account has been compromised.</p>
  </> },
  { id: 'international', title: '11. International processing', body: <>
    <p>SceneFlood and its providers may process information in countries other than your own. Data protection rules in those countries may differ from those where you live. Where required, we use appropriate measures for such transfers and handle requests under applicable law.</p>
  </> },
  { id: 'rights', title: '12. Your choices and rights', body: <>
    <p>You can update some account and project information in the Service, disconnect integrations, manage platform permissions with the relevant provider, and request access to, correction of, export of, or deletion of personal information by contacting us. You may also object to or ask us to restrict certain processing where applicable law provides that right. We will respond according to applicable law and may need to verify your identity. Some requests may be limited where retention is necessary to meet legal obligations or protect the Service.</p>
    <p>Where we rely on your consent or an authorization you grant to a connected platform, you may withdraw that authorization using the platform&apos;s controls or by disconnecting the integration. Withdrawal does not undo processing already completed or content already published.</p>
  </> },
  { id: 'children', title: '13. Children', body: <>
    <p>The Service is intended for people who may lawfully create an account and authorize the connected platforms they use. It is not directed to children. If you believe a child has provided personal information to us without appropriate authorization, contact us so we can review and address the issue.</p>
  </> },
  { id: 'changes', title: '14. Changes to this policy', body: <>
    <p>We may update this Privacy Policy as the Service, its providers, or applicable requirements change. We will post the revised policy here and update the effective date. If a change materially affects how we handle information, we will provide additional notice when required.</p>
  </> },
  { id: 'contact', title: '15. Contact', body: <>
    <p>For questions, requests to access or delete information, or concerns about this policy, email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Please include enough information for us to identify your account or request, but do not email passwords, payment card details, or access tokens.</p>
  </> },
];

export default function PrivacyPage() {
  return <main className={styles.page}>
    <div className={styles.shell}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Group gap="sm">
          <ThemeIcon size={36} radius="md" variant="light" color="blue"><IconSparkles size={20} /></ThemeIcon>
          <Text className={styles.brand}>SceneFlood</Text>
        </Group>
        <Badge size="lg" radius="xl" variant="light" color="blue">Privacy Center</Badge>
      </nav>
      <header className={styles.header}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <Badge radius="xl" size="lg" variant="light" color="blue">Legal · SceneFlood</Badge>
        <Title order={1} className={styles.heroTitle}>Privacy <span>Policy</span></Title>
        <Text className={styles.heroText}>How we handle information when you use SceneFlood to create and publish content.</Text>
        <Group mt="xl" gap="md">
          <Badge size="lg" radius="xl" variant="outline" color="gray">Effective November 3, 2026</Badge>
          <Button component="a" href={`mailto:${contactEmail}`} variant="light" color="blue" radius="xl" rightSection={<IconMail size={16} />}>Contact us</Button>
        </Group>
      </header>
      <div className={styles.layout}>
        <aside className={styles.toc} aria-label="On this page">
          <strong>On this page</strong>
          {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </aside>
        <article className={styles.article}>
          {sections.map((section) => <section key={section.id} id={section.id} className={styles.section}>
            <h2>{section.title}</h2>
            {section.body}
          </section>)}
        </article>
      </div>
      <footer className={styles.footer}>
        <span>© 2026 SceneFlood</span>
        <a href={`mailto:${contactEmail}`}>Privacy questions <IconArrowUpRight size={14} /></a>
      </footer>
    </div>
  </main>;
}
