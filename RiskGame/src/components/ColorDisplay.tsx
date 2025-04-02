import { COLORS } from "@shared/types/users/user"


export const ColorDisplay = ({ color }: { color: COLORS }) => {
  if (color === COLORS.RED)
    return <div className="w-full h-8 rounded-md bg-player-red"></div>;
  if (color === COLORS.ORANGE)
    return <div className="w-full h-8 rounded-md bg-player-orange"></div>;
  if (color === COLORS.YELLOW)
    return <div className="w-full h-8 rounded-md bg-player-yellow"></div>;
  if (color === COLORS.GREEN)
    return <div className="w-full h-8 rounded-md bg-player-green"></div>;
  if (color === COLORS.BLUE)
    return <div className="w-full h-8 rounded-md bg-player-blue"></div>;
  if (color === COLORS.BLACK)
    return <div className="w-full h-8 rounded-md bg-player-black"></div>;
  return null;
};