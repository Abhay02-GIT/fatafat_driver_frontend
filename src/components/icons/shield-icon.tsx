import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
  filled?: boolean;
};

export function ShieldIcon({ size = 64, color = '#22C55E', filled = false }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L4 5v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
        fill={filled ? color : 'none'}
      />
    </Svg>
  );
}