import React from 'react';
import { Callback } from '@catlord/types';
import { useList, useToggle } from '@catlord/hooks';
import { IMenuSection } from './menu.types';

/**
 * module augmentation method of extending React.CSSProperties
 * as described at the following link:
 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
 */
declare module 'csstype' {
  interface Properties {
    // Add a CSS Custom Property
    '--animation-order'?: string | number;
  }
}

export interface MenuProps {
  activeSectionId: string;
  menuSections: IMenuSection[];
  open?: boolean;
  onRequestClose?: Callback;
  onSelectOption?: (sectionId: string, optionId: string) => void;
  onClosed?: Callback;
  onOpened?: Callback;
}

export function Menu(props: MenuProps) {
  const { open, onRequestClose } = props;
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useToggle(open);

  const { activeSectionId, menuSections, onSelectOption } = props;
  const [
    seenSectionIds,
    clearSeenSectionIds,
    replaceSectionIds,
    addSeenSectionId,
  ] = useList<string>([]);
  React.useEffect(() => {
    if (seenSectionIds.indexOf(activeSectionId) === -1) {
      addSeenSectionId(activeSectionId);
    }
  }, [activeSectionId, addSeenSectionId, seenSectionIds]);

  React.useEffect(() => {
    if (open === isOpen) return;
    if (!menuRef.current) return setIsOpen(open);
    const animations = menuRef.current.getAnimations?.() || [];
    if (animations.length === 0) return setIsOpen(open);
    const [animation] = animations;
    animation.finished.then(() => setIsOpen(open));
  }, [clearSeenSectionIds, isOpen, open, setIsOpen]);

  const [isVisible, setIsVisible] = useToggle(open);
  const { onClosed, onOpened } = props;
  React.useEffect(() => {
    if (!menuRef.current) return;
    const animations = menuRef.current.getAnimations?.() || [];
    if (animations.length === 0) return;
    const [animation] = animations;
    if (isOpen) setIsVisible(true);
    animation.finished.then(() => {
      if (isOpen) {
        onOpened?.();
      } else {
        setIsVisible(false);
        onClosed?.();
      }
    });
  }, [isOpen, onClosed, onOpened, setIsVisible]);

  React.useEffect(() => {
    if (open && !isVisible) {
      clearSeenSectionIds();
    }
  }, [open, isVisible, clearSeenSectionIds]);

  let menuClassName = isOpen ? 'menu open' : 'menu closed';
  if (!isVisible) menuClassName += ' norender';

  return (
    <div ref={menuRef} className={menuClassName} onClick={onRequestClose}>
      {menuSections.map((section) => {
        let className = 'section';
        const isActive = section.id === activeSectionId;
        if (isActive) className += ' active';
        else {
          className += ' hidden';
          const wasSeen = seenSectionIds.indexOf(section.id) > -1;
          if (wasSeen) className += ' left';
        }
        return (
          <div key={section.id} className={className}>
            {section.options.map((option, i) => {
              const onSelect =
                onSelectOption &&
                ((event: React.MouseEvent) => {
                  event.stopPropagation();
                  onSelectOption(section.id, option.id);
                });
              return (
                <span
                  key={option.id}
                  className={isVisible ? 'item' : 'item norender'}
                  style={{ '--animation-order': i }}
                  onClick={onSelect}
                >
                  {option.name}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
