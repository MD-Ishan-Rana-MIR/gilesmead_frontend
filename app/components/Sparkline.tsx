type SparklineProps = {
    data: number[]; // exactly 7 values
};

export default function Sparkline({ data }: SparklineProps) {
    if (!data || data.length < 2) return null;

    const width = 72;
    const height = 20;
    const padding = 2;

    const min = Math.min(...data);
    const max = Math.max(...data);

    const points = data
        .map((value, i) => {
            const x =
                (i / (data.length - 1)) * (width - padding * 2) +
                padding;

            const y =
                height -
                padding -
                ((value - min) / (max - min || 1)) *
                (height - padding * 2);

            return `${x},${y}`;
        })
        .join(" ");

    const isUp = data[data.length - 1] >= data[0];

    return (
        <svg
            width={width}
            height={height}
            className="block"
        >
            <polyline
                points={points}
                fill="none"
                stroke={isUp ? "#16A34A" : "#DC2626"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
