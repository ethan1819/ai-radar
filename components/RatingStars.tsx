import { Star } from "lucide-react";

export default function RatingStars({ rating, reviewCount, size="sm" }: { rating: number; reviewCount?: number; size?:"sm"|"md"|"lg" }) {
  const sz = size==="lg"?5:size==="md"?4:3.5;
  const ts = size==="lg"?"text-base":size==="md"?"text-sm":"text-xs";
  return (<div className="inline-flex items-center gap-1">
    {Array.from({length:5}).map((_,i)=>(<Star key={i} className={"h-"+sz+" w-"+sz+" "+(i<Math.round(rating)?"text-yellow fill-yellow":"text-border-strong")} />))}
    {reviewCount!==undefined && <span className={"text-text-subtle ml-1 "+ts}>({reviewCount.toLocaleString()})</span>}
  </div>);
}