import HelloWorld from "@/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
  test("If user is not loggoed in, do not show logout button", () => {
    const wrapper = mount(HelloWorld);
    console.log('sss', wrapper.vm);
    
    expect(wrapper.find("button")).toBeTruthy();
  });

  test("If user is loggoed in, show logout button", () => {
    const wrapper = mount(HelloWorld);    
    wrapper.vm.loggedIn = true;
    expect(wrapper.find("button")).toBeTruthy();
  });
});

// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
