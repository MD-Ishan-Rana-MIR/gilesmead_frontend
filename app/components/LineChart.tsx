type LineChartProps = {
    data: number[];
    width?: number;
    height?: number;
};


export default function LineChart({
    data,
    width = 120,
    height = 40,
}: LineChartProps) {
    if (!data.length) return null;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const points = data
        .map((value, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - ((value - min) / range) * height;
            return `${x},${y}`;
        })
        .join(" ");

    return (
        <svg width={width} height={height} className="block">
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points={points}
                className="text-blue-600"
            />
        </svg>
    );
}
