import React, {type PropsWithChildren} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface DialogProps {
  title: string;
  description?: string;
  confirmText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Dialog: React.FC<PropsWithChildren<DialogProps>> = ({
  children,
  title,
  description = null,
  confirmText,
  onConfirm,
  onCancel,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
        {children}
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.leftButton]}
            onPress={onCancel}>
            <Text style={styles.buttonText}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.rightButton]}
            onPress={onConfirm}>
            <Text style={[styles.buttonText, styles.confirmText]}>
              {confirmText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
