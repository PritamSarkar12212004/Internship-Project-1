import { View, Text, TouchableOpacity } from 'react-native';
import Theme from '../../consts/theme/Theme';
import React from 'react';
import Icon from '../global/Icon';
import { isErrorWithCode, keepLocalCopy, pick } from '@react-native-documents/picker';

interface AtchMentProps {
  selectedDocument: string;
  onDocumentPick: (filePath: string) => void;
}

const AtchMent = ({ selectedDocument, onDocumentPick }: AtchMentProps) => {
  const openDocumentPicker = async () => {
    try {
      const [result] = await pick({
        mode: 'open',
      });
      const [localCopy] = await keepLocalCopy({
        files: [
          {
            uri: result.uri,
            fileName: result.name ?? 'document',
          },
        ],
        destination: 'cachesDirectory',
      });
      onDocumentPick(localCopy?.localUri || result.uri);
    } catch (error) {
      if (isErrorWithCode(error) && error.code === 'OPERATION_CANCELED') {
        return;
      }
      console.warn('Document pick failed', error);
    }
  };

  return (
    <View className="w-full flex gap-3 mt-4">
      <View className="w-full flex flex-row items-center justify-between">
        <Text className="text-ls font-semibold">
          Attach proof of registration
        </Text>
        <TouchableOpacity
          onPress={openDocumentPicker}
          activeOpacity={0.9}
          className="h-16 w-16 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: Theme.BUTTONS.First,
          }}
        >
          <Icon name="file" color="white" size={22} />
        </TouchableOpacity>
      </View>
      <Text className="text-sm text-zinc-600">
        {selectedDocument || 'No document selected'}
      </Text>
    </View>
  );
};

export default AtchMent;
