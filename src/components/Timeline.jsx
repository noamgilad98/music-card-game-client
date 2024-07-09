import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';

const Timeline = ({ cards, onDrop }) => {
    return (
        <div className="timeline">
            {cards.map((card, index) => (
                <DropZone key={index} index={index} onDrop={onDrop}>
                    <Card card={card} />
                </DropZone>
            ))}
            <DropZone index={cards.length} onDrop={onDrop}>
                <div className="empty-slot">Drop here</div>
            </DropZone>
        </div>
    );
};

const DropZone = ({ index, onDrop, children }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'CARD',
        drop: (item) => onDrop(item.card, index),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div ref={drop} className={`drop-zone ${isOver ? 'hover' : ''}`}>
            {children}
        </div>
    );
};

export default Timeline;
