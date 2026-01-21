import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUnit } from '../store/settingsSlice';
import GlassPanel from './GlassPanel';
import { clsx } from 'clsx';

const UnitToggle = () => {
    const dispatch = useDispatch();
    const currentUnit = useSelector((state) => state.settings.unit);
    const units = ['C', 'F', 'K'];

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-1 flex gap-1 border border-white/20 w-fit">
            {units.map((unit) => (
                <button
                    key={unit}
                    onClick={() => dispatch(setUnit(unit))}
                    className={clsx(
                        "w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center transition-all duration-200",
                        currentUnit === unit
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-white hover:bg-white/10"
                    )}
                >
                    {unit === 'K' ? 'K' : `°${unit}`}
                </button>
            ))}
        </div>
    );
};

export default UnitToggle;
