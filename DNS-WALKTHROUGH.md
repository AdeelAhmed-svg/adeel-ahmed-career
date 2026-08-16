# DNS Walkthrough — How This Site Will Reach a FlyRank Domain

This explains, in plain language, what DNS is and what will need to happen when FlyRank provides a subdomain for this portfolio. **A FlyRank subdomain has not been assigned yet.** Right now this site lives at its default Netlify URL (`https://<site-name>.netlify.app`), which is already a public HTTPS address. The steps below describe what happens later, once FlyRank issues the subdomain as part of the internship requirements.

## What DNS is

DNS (Domain Name System) is the system that turns a human-readable domain name, like `adeel.flyrank.com`, into the numeric IP address a browser actually needs to connect to a server. Without DNS, you would have to type an IP address instead of a name every time you wanted to visit a site.

## What a DNS resolver does

When a browser needs to look up a domain, it asks a **resolver** — usually run by your internet provider or a public service like Google or Cloudflare. The resolver's job is to track down the answer on your behalf, asking other DNS servers if it doesn't already know it, and then hand the final answer back to your browser.

## What nameservers do

**Nameservers** are the servers that actually hold the DNS records for a domain. When a resolver doesn't know the answer for `flyrank.com`, it eventually asks the nameservers that FlyRank has designated as authoritative for that domain. Those nameservers respond with the specific DNS records configured for that domain or subdomain.

## What a DNS record is

A **DNS record** is a single instruction stored on a nameserver, mapping a name to a value. There are several types: an `A` record maps a name directly to an IP address, while a `CNAME` record maps a name to another name.

## What a CNAME record is

A **CNAME (Canonical Name) record** points one domain name to another domain name, instead of to a raw IP address. This is exactly what a domain pointing at a hosting platform like Netlify normally uses, because Netlify's own servers can change IP addresses behind the scenes, and a CNAME lets the domain follow along automatically.

## What a CNAME value points to

For a Netlify-hosted site, a CNAME record's value points to the Netlify subdomain assigned to the site, for example `<site-name>.netlify.app`. Once that CNAME is in place, any request for the custom domain gets redirected, at the DNS level, to Netlify's servers.

## What happens when someone enters the domain

1. The browser asks a DNS resolver to look up the domain.
2. The resolver checks the domain's authoritative nameservers for a matching record.
3. If it finds a CNAME record, it follows that record to the target name (the Netlify subdomain) and resolves that name to an IP address.
4. The browser connects to that IP address, which belongs to Netlify's content delivery network.
5. Netlify's servers identify which site the request is for (based on the domain name in the request) and serve this portfolio.

## How HTTPS and the certificate fit in

Once the domain resolves to Netlify, Netlify automatically provisions a free TLS certificate for that domain (through Let's Encrypt). This certificate is what allows the padlock and `https://` in the browser address bar — it encrypts traffic between the visitor's browser and Netlify's servers, and it also proves to the browser that the site is really being served by whoever controls that domain's DNS. This certificate step happens automatically after the domain is correctly pointed at Netlify; there is no separate manual certificate purchase needed.

## What happens when FlyRank provides the subdomain

Once FlyRank issues a subdomain (for example, something like `adeel.flyrank.com`) as part of completing the relevant internship requirements, the remaining steps are:

1. Add the subdomain as a custom domain in this site's Netlify settings.
2. In FlyRank's DNS settings for their domain, add a CNAME record pointing the new subdomain at this site's Netlify subdomain (`<site-name>.netlify.app`).
3. Wait for DNS propagation (usually minutes, sometimes longer depending on caching).
4. Confirm Netlify has issued an HTTPS certificate for the new subdomain and that the site loads correctly over `https://`.

Until that subdomain is issued, the Netlify URL remains the public, working HTTPS address for this portfolio.
