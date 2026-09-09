import {useEffect, useRef, useState} from "preact/hooks";
import {Icon} from "../../shared/components/Icon.jsx";

function renderText(text) {
  if (!text) return "";
  return String(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /`(.*?)`/g,
      '<code class="px-1.5 py-0.5 rounded font-mono text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">$1</code>',
    );
}

// Full-screen overlay for a card image. Closes on Escape, on the close
// button, or on a click anywhere (the image included).
function Lightbox({image, onClose}) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const bg = image.contain ? "bg-black" : "bg-white";

  return (
    <div
      class="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || "Enlarged image"}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        class="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      <img src={image.src} alt={image.alt} class={`max-h-[85vh] max-w-full w-auto rounded-lg shadow-2xl object-contain ${bg}`} />
      {image.caption && (
        <p class="mt-3 max-w-3xl text-center text-sm text-gray-300" dangerouslySetInnerHTML={{__html: renderText(image.caption)}} />
      )}
    </div>
  );
}

function FeatureCard({item, iconSvg, imgData, variant = "grid", large = false, onZoom}) {
  const isCard = variant === "bento";
  const wrapperCls = isCard
    ? `relative h-full rounded-2xl ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800/50 ${large ? "p-8 lg:p-10" : "p-6"} hover:ring-primary-300 dark:hover:ring-primary-600 hover:shadow-lg transition-all duration-300 overflow-hidden`
    : "";

  const iconWrapper = large ? "w-14 h-14 lg:w-16 lg:h-16" : "w-11 h-11 lg:w-12 lg:h-12";
  const iconSize = large ? "height:1.75rem;width:auto" : "height:1.4rem;width:auto";

  const titleSize = large ? "text-2xl lg:text-3xl" : isCard ? "text-lg lg:text-xl" : "text-xl";
  const descSize = large ? "text-base lg:text-lg" : "text-sm lg:text-base";
  const topImageSrc = item.image_src || imgData?.src;
  const showTopImage = topImageSrc && variant === "grid";
  const imageContain = item.image_fit === "contain";
  const imageFit = imageContain ? "object-contain bg-black" : "object-cover";
  const imageAspect = imageContain ? "aspect-[4/3]" : "aspect-[8/3]";
  const imageWidth = item.image_size === "compact" ? "max-w-xs" : "max-w-sm";

  return (
    <div class={wrapperCls}>
      {showTopImage ? (
        <div class={`mb-5 w-full ${imageWidth}`}>
          <button
            type="button"
            class="block w-full overflow-hidden rounded-lg border border-gray-200 bg-white p-0 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label={`Enlarge image: ${item.name || ""}`}
            onClick={() => onZoom?.({src: topImageSrc, alt: item.name || "", caption: item.image_caption, contain: imageContain})}
          >
            <img src={topImageSrc} alt={item.name || ""} class={`block ${imageAspect} w-full ${imageFit}`} loading="lazy" />
          </button>
          {item.image_caption && (
            <p class="mt-1.5 text-xs leading-snug text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{__html: renderText(item.image_caption)}} />
          )}
        </div>
      ) : (
        iconSvg && (
          <div
            class={`flex justify-center items-center mb-5 ${iconWrapper} rounded-2xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300`}
          >
            <Icon svg={iconSvg} attributes={{class: "inline-block", style: iconSize}} />
          </div>
        )
      )}
      {item.name && (
        <h3
          class={`mb-2 ${titleSize} font-bold text-gray-900 dark:text-white tracking-tight`}
          dangerouslySetInnerHTML={{__html: renderText(item.name)}}
        />
      )}
      {item.description && (
        <p class={`${descSize} text-gray-600 dark:text-gray-400 leading-relaxed`} dangerouslySetInnerHTML={{__html: renderText(item.description)}} />
      )}
      {large && imgData?.src && variant === "bento" && (
        <button
          type="button"
          class="mt-6 -mx-2 lg:-mx-4 block p-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl"
          aria-label={`Enlarge image: ${item.name || ""}`}
          onClick={() => onZoom?.({src: imgData.src, alt: item.name || "", caption: item.image_caption, contain: false})}
        >
          <img src={imgData.src} alt={item.name || ""} class="w-full rounded-xl ring-1 ring-gray-200 dark:ring-gray-700" loading="lazy" />
        </button>
      )}
    </div>
  );
}

function GridLayout({items, iconMap, item_images, onZoom}) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      {items.map((item, idx) => (
        <FeatureCard key={idx} item={item} iconSvg={item.icon ? iconMap[item.icon] : null} imgData={item_images?.[String(idx)]} variant="grid" onZoom={onZoom} />
      ))}
    </div>
  );
}

function BentoLayout({items, iconMap, item_images, onZoom}) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 grid-flow-dense auto-rows-fr">
      {items.map((item, idx) => {
        const large = idx === 0;
        const spanCls = large ? "md:col-span-2 lg:row-span-2" : "";
        return (
          <div key={idx} class={spanCls}>
            <FeatureCard
              item={item}
              iconSvg={item.icon ? iconMap[item.icon] : null}
              imgData={item_images?.[String(idx)]}
              variant="bento"
              large={large}
              onZoom={onZoom}
            />
          </div>
        );
      })}
    </div>
  );
}

export const FeaturesBlock = ({content = {}, design = {}, icon_svgs = {}, item_images = {}}) => {
  const {title, subtitle, text, items: rawItems = []} = content;
  const items = Array.isArray(rawItems) ? rawItems : [];
  const layout = design.layout || "grid";
  const [zoomed, setZoomed] = useState(null);
  const closeZoom = () => setZoomed(null);

  return (
    <div class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        {(title || text || subtitle) && (
          <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            {subtitle && <p class="text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3">{subtitle}</p>}
            {title && (
              <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
                dangerouslySetInnerHTML={{__html: renderText(title)}}
              />
            )}
            {text && <p class="text-lg text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{__html: renderText(text)}} />}
          </div>
        )}

        {items.length > 0 &&
          (layout === "bento" ? (
            <BentoLayout items={items} iconMap={icon_svgs} item_images={item_images} onZoom={setZoomed} />
          ) : (
            <GridLayout items={items} iconMap={icon_svgs} item_images={item_images} onZoom={setZoomed} />
          ))}
      </div>
      {zoomed && <Lightbox image={zoomed} onClose={closeZoom} />}
    </div>
  );
};
