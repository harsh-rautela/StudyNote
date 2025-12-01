import { useMemo} from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

function RatingStars({Review_Count,Star_Size}){
     const starCount = useMemo(() => {
    const full = Math.floor(Review_Count) || 0;
    const half = Number.isInteger(Review_Count) ? 0 : 1;
    const empty = Number.isInteger(Review_Count)
      ? 5 - full
      : 4 - full;

    return { full, half, empty };
  }, [Review_Count]);
  return (
    <div className="flex gap-1 text-yellow-100">
      {[...new Array(starCount.full)].map((_, i) => {
        return <TiStarFullOutline key={i} size={Star_Size || 20} />
      })}
      {[...new Array(starCount.half)].map((_, i) => {
        return <TiStarHalfOutline key={i} size={Star_Size || 20} />
      })}
      {[...new Array(starCount.empty)].map((_, i) => {
        return <TiStarOutline key={i} size={Star_Size || 20} />
      })}
    </div>
  )

}
export default RatingStars