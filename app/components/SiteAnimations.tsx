"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function SiteAnimations() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let cancelled = false;
    const mm = gsap.matchMedia();

    const init = () => {
      if (cancelled) return;

      /* ------------------------------------------------------------------ */
      /* Reduced motion: skip everything, just remove the overlay            */
      /* ------------------------------------------------------------------ */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(overlayRef.current, { display: "none" });
      });

      /* ------------------------------------------------------------------ */
      /* Full experience                                                     */
      /* ------------------------------------------------------------------ */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const overlay = overlayRef.current;
        const $ = (s: string) => gsap.utils.toArray<HTMLElement>(s);

        /* ---------- initial states (page is covered by the overlay) ------ */
        gsap.set("header", { autoAlpha: 0, y: -24 });
        gsap.set('[data-anim="hero-avatar"]', { autoAlpha: 0, scale: 0.3 });
        gsap.set('[data-anim="hero-star"]', { autoAlpha: 0, scale: 0 });
        gsap.set('[data-anim="hero-social-text"]', { autoAlpha: 0, y: 12 });
        gsap.set('[data-anim="hero-desc"]', { autoAlpha: 0, y: 24 });
        gsap.set('[data-anim="hero-cta"]', { autoAlpha: 0, y: 20 });
        gsap.set('[data-anim="hero-visual"]', { autoAlpha: 0, y: 50, scale: 0.94 });
        gsap.set(".js-rating-card", { autoAlpha: 0, y: -24 });

        /* ---------- hero timeline (plays after the intro) ---------------- */
        const split = SplitText.create('[data-anim="hero-title"]', {
          type: "words",
          mask: "words",
        });

        const heroTl = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.out" },
        });

        heroTl
          .to("header", { autoAlpha: 1, y: 0, duration: 0.6 })
          .to(
            '[data-anim="hero-avatar"]',
            { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2.2)", stagger: 0.07 },
            "-=0.3"
          )
          .to(
            '[data-anim="hero-star"]',
            { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(3)", stagger: 0.05 },
            "-=0.35"
          )
          .to('[data-anim="hero-social-text"]', { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.3")
          .from(
            split.words,
            { yPercent: 120, autoAlpha: 0, duration: 0.7, stagger: 0.05 },
            "-=0.25"
          )
          .to('[data-anim="hero-desc"]', { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.35")
          .to(
            '[data-anim="hero-cta"]',
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12 },
            "-=0.4"
          )
          .to(
            '[data-anim="hero-visual"]',
            { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
            "<-0.2"
          )
          .to(
            ".js-rating-card",
            { autoAlpha: 1, y: 0, duration: 0.7, ease: "back.out(1.8)" },
            "-=0.4"
          );

        /* ---------- intro overlay: loom threads + logo reveal ------------ */
        const master = gsap.timeline();
        const seen = sessionStorage.getItem("ll-intro-seen");

        if (seen) {
          master
            .to(overlay, { autoAlpha: 0, duration: 0.35, ease: "power2.out" })
            .set(overlay, { display: "none" })
            .add(() => heroTl.timeScale(1.25).play(), "-=0.2");
        } else {
          sessionStorage.setItem("ll-intro-seen", "1");
          master
            .to('[data-intro="thread"]', {
              scaleX: 1,
              duration: 0.7,
              ease: "power3.inOut",
              stagger: 0.09,
            })
            .from(
              '[data-intro="logo"]',
              { autoAlpha: 0, y: 26, duration: 0.6, ease: "power3.out" },
              "-=0.35"
            )
            .from(
              '[data-intro="tagline"]',
              { autoAlpha: 0, y: 14, duration: 0.45, ease: "power3.out" },
              "-=0.3"
            )
            .to(
              '[data-intro="thread"]',
              {
                scaleX: 0,
                transformOrigin: "right center",
                duration: 0.5,
                ease: "power3.in",
                stagger: 0.06,
              },
              "+=0.45"
            )
            .to(
              '[data-intro="logo"], [data-intro="tagline"]',
              { autoAlpha: 0, y: -18, duration: 0.4, ease: "power2.in" },
              "<"
            )
            .to(overlay, { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "-=0.15")
            .set(overlay, { display: "none" })
            .add(() => heroTl.play(), "-=0.55");
        }

        /* ---------- scroll animations ------------------------------------ */
        const fadeUp = (targets: string, trigger: string, vars: gsap.TweenVars = {}) =>
          gsap.from(targets, {
            autoAlpha: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger, start: "top 82%" },
            ...vars,
          });

        /* Feature grid */
        fadeUp('[data-anim="fg-head"]', '[data-anim="fg-head"]');
        gsap.from('[data-anim="fg-card-left"]', {
          autoAlpha: 0,
          x: -48,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: '[data-anim="fg-grid"]', start: "top 78%" },
        });
        gsap.from('[data-anim="fg-card-right"]', {
          autoAlpha: 0,
          x: 48,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: '[data-anim="fg-grid"]', start: "top 78%" },
        });
        gsap.from('[data-anim="fg-center"]', {
          autoAlpha: 0,
          y: 48,
          scale: 0.94,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: '[data-anim="fg-grid"]', start: "top 78%" },
        });
        gsap.fromTo(
          '[data-anim="fg-mockup"]',
          { y: 24 },
          {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: '[data-anim="fg-center"]',
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        /* Trust section */
        gsap.fromTo(
          '[data-anim="trust-photo"]',
          { clipPath: "inset(0% 100% 0% 0% round 24px)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            scale: 1,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: '[data-anim="trust-photo"]', start: "top 78%" },
          }
        );
        fadeUp('[data-anim="trust-title"]', '[data-anim="trust-title"]');
        gsap.from('[data-anim="trust-point"]', {
          autoAlpha: 0,
          x: 56,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: '[data-anim="trust-point"]', start: "top 82%" },
        });

        /* Testimonials */
        fadeUp('[data-anim="ts-head"]', '[data-anim="ts-head"]');
        gsap.from('[data-anim="ts-card"]', {
          autoAlpha: 0,
          y: 44,
          duration: 0.7,
          ease: "power3.out",
          stagger: { each: 0.08, from: "start" },
          scrollTrigger: { trigger: '[data-anim="ts-grid"]', start: "top 80%" },
        });
        gsap.from('[data-anim="ts-badge"]', {
          autoAlpha: 0,
          scale: 0.6,
          y: 20,
          duration: 0.7,
          ease: "back.out(2)",
          scrollTrigger: { trigger: '[data-anim="ts-grid"]', start: "bottom 92%" },
        });

        /* Contact */
        gsap.from('[data-anim="contact-card"]', {
          autoAlpha: 0,
          y: 60,
          scale: 0.97,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: '[data-anim="contact-card"]', start: "top 82%" },
        });
        gsap.from('[data-anim="contact-copy"] > *', {
          autoAlpha: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: '[data-anim="contact-card"]', start: "top 75%" },
        });
        gsap.from('[data-anim="contact-photo"]', {
          autoAlpha: 0,
          x: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: '[data-anim="contact-card"]', start: "top 75%" },
        });

        /* Footer */
        gsap.from('[data-anim="foot-col"]', {
          autoAlpha: 0,
          y: 36,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: "footer", start: "top 85%" },
        });
        gsap.from('[data-anim="foot-bottom"]', {
          autoAlpha: 0,
          y: 16,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: "footer", start: "top 70%" },
        });
        gsap.to('[data-anim="foot-graphic"]', {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        return () => {
          split.revert();
        };
      });
    };

    /* wait for webfonts so SplitText measures the final layout */
    if (document.fonts?.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    /*
     * Below-the-fold images (avatars, photos, mockups) finish loading after
     * ScrollTrigger has already measured trigger positions, which shifts
     * page height and can leave later sections (e.g. the contact card)
     * permanently stuck at their pre-reveal opacity. Recompute once
     * everything has actually finished loading.
     */
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
    }

    return () => {
      cancelled = true;
      mm.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      id="intro-overlay"
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#FFFDF7]"
    >
      {/* loom threads */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <span
          data-intro="thread"
          className="absolute left-0 top-[-40px] block h-[2px] w-full origin-left scale-x-0 bg-[#F0E68C]"
        />
        <span
          data-intro="thread"
          className="absolute left-0 top-0 block h-[2px] w-full origin-left scale-x-0 bg-primary"
        />
        <span
          data-intro="thread"
          className="absolute left-0 top-[40px] block h-[2px] w-full origin-left scale-x-0 bg-[#171717]/25"
        />
      </div>

      {/* logo + tagline sit on the same background so threads appear woven behind */}
      <div className="relative z-10 flex flex-col items-center gap-4 bg-[#FFFDF7] px-10 py-6">
        <div data-intro="logo">
          <Image src="/figma/footer-logo.png" alt="LocalLoom" width={148} height={68} priority />
        </div>
        <p
          data-intro="tagline"
          className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4E5059]"
        >
          Weaving Local Connections
        </p>
      </div>
    </div>
  );
}
