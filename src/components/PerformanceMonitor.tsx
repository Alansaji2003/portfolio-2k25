import { useState, useEffect } from 'react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

interface PerformanceMonitorProps {
    enabled?: boolean;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PerformanceMonitor = ({
    enabled = import.meta.env.DEV,
    position = 'top-right'
}: PerformanceMonitorProps) => {
    const [metrics, setMetrics] = useState<{ fps: number; memory?: number; isLowPerformance: boolean }>({ 
        fps: 0, 
        isLowPerformance: false 
    });
    const [isVisible, setIsVisible] = useState(false);

    usePerformanceMonitor(enabled ? (newMetrics) => setMetrics(newMetrics) : undefined);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'P') {
                setIsVisible(!isVisible);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isVisible]);

    if (!enabled || !isVisible) return null;

    const positionClasses = {
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
    };

    const formatMemory = (bytes: number) => {
        if (!bytes) return 'N/A';
        const mb = bytes / (1024 * 1024);
        return `${mb.toFixed(1)}MB`;
    };

    return (
        <div className={`fixed ${positionClasses[position]} z-[9999] bg-black/80 text-white p-3 rounded-lg text-sm font-mono backdrop-blur-sm`}>
            <div className="space-y-1">
                <div className={`flex items-center gap-2 ${metrics.isLowPerformance ? 'text-red-400' : 'text-green-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${metrics.isLowPerformance ? 'bg-red-400' : 'bg-green-400'}`} />
                    <span>FPS: {metrics.fps}</span>
                </div>

                {metrics.memory && (
                    <div className="text-blue-400">
                        Memory: {formatMemory(metrics.memory)}
                    </div>
                )}

                <div className="text-gray-400 text-xs mt-2">
                    Ctrl+Shift+P to toggle
                </div>
            </div>
        </div>
    );
};

export default PerformanceMonitor;