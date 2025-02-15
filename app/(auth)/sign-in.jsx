import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }



  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center m-h-[85vh] px-4 my-6">
            <Image
              source={images.logo}
              className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Log in to Aora
            </Text>
            <FormField
              title="Email"
              value={form.email}
              handleCheckText={(e) => setForm({
                ...form,
                email: e
              })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleCheckText={(e) => setForm({
                ...form,
                password: e
              })}
              otherStyles="mt-7"
            />

            <CustomButton
              title={`Sign In`}
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">
                    Don't you have an account ? 
                </Text>
            </View>
              <Link href="/sign-up"
              className='text-lg font-psemibold text-secondary text-center'
              >
                Sign Up
              </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn