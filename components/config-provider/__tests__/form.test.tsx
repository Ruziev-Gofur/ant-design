import React from 'react';
import { act } from 'react-dom/test-utils';
import scrollIntoView from 'scroll-into-view-if-needed';
import Button from '../../button';
import ConfigProvider from '..';
import { fireEvent, render, waitFakeTimer } from '../../../tests/utils';
import type { FormInstance } from '../../form';
import Form from '../../form';
import Input from '../../input';
import zhCN from '../../locale/zh_CN';

jest.mock('scroll-into-view-if-needed');

describe('ConfigProvider.Form', () => {
  (scrollIntoView as any).mockImplementation(() => {});

  beforeEach(() => {
    (scrollIntoView as any).mockReset();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    (scrollIntoView as any).mockRestore();
  });

  describe('form validateMessages', () => {
    const renderComponent = ({ validateMessages }: { validateMessages?: any }) => {
      const formRef = React.createRef<FormInstance>();
      const { container } = render(
        <ConfigProvider locale={zhCN} form={{ validateMessages }}>
          <Form ref={formRef} initialValues={{ age: 18 }}>
            <Form.Item name="test" label="姓名" rules={[{ required: true }]}>
              <input />
            </Form.Item>
            <Form.Item name="age" label="年龄" rules={[{ type: 'number', len: 17 }]}>
              <input />
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );
      return [container, formRef] as const;
    };

    it('set locale zhCN', async () => {
      const [container, formRef] = renderComponent({});

      await act(async () => {
        try {
          await formRef.current?.validateFields();
        } catch (e) {
          // Do nothing
        }
      });

      await act(async () => {
        jest.runAllTimers();
        await Promise.resolve();
      });

      act(() => {
        jest.runAllTimers();
      });

      expect(container.querySelector('.ant-form-item-explain')).toHaveTextContent('请输入姓名');
    });

    it('set locale zhCN and set form validateMessages one item, other use default message', async () => {
      const [container, formRef] = renderComponent({ validateMessages: { required: '必须' } });

      await act(async () => {
        try {
          await formRef.current?.validateFields();
        } catch (e) {
          // Do nothing
        }
      });

      await act(async () => {
        jest.runAllTimers();
        await Promise.resolve();
      });

      act(() => {
        jest.runAllTimers();
      });

      const explains = Array.from(container.querySelectorAll('.ant-form-item-explain'));

      expect(explains[0]).toHaveTextContent('必须');
      expect(explains[explains.length - 1]).toHaveTextContent('年龄必须等于17');
    });
  });

  describe('form requiredMark', () => {
    it('set requiredMark optional', () => {
      const { container } = render(
        <ConfigProvider form={{ requiredMark: 'optional' }}>
          <Form initialValues={{ age: 18 }}>
            <Form.Item name="age" label="年龄" rules={[{ type: 'number', len: 17 }]}>
              <input />
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('form colon', () => {
    it('set colon false', () => {
      const { container } = render(
        <ConfigProvider form={{ colon: false }}>
          <Form>
            <Form.Item label="没有冒号">
              <input />
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );
      expect(container.querySelector('.ant-form-item-no-colon')).toBeTruthy();
    });

    it('set colon default', () => {
      const { container } = render(
        <ConfigProvider>
          <Form>
            <Form.Item label="姓名">
              <input />
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );
      expect(container.querySelector('.ant-form-item-no-colon')).toBeFalsy();
    });
  });

  describe('form disabled', () => {
    it('set Input enabled', () => {
      const { container } = render(
        <Form disabled>
          <ConfigProvider componentDisabled={false}>
            <Form.Item name="input1" label="启用">
              <Input />
            </Form.Item>
          </ConfigProvider>
          <Form.Item name="input" label="禁用">
            <Input />
          </Form.Item>
        </Form>,
      );

      expect(container.querySelector('#input1[disabled]')).toBeFalsy();
      expect(container.querySelector('#input[disabled]')).toBeTruthy();
    });
  });

  describe('form scrollToFirstError', () => {
    it('set object, form not set', async () => {
      (scrollIntoView as any).mockImplementation(() => {});
      const onFinishFailed = jest.fn();

      const { container } = render(
        <ConfigProvider form={{ scrollToFirstError: { block: 'center' } }}>
          <Form onFinishFailed={onFinishFailed}>
            <Form.Item name="test" rules={[{ required: true }]}>
              <input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );

      expect(scrollIntoView).not.toHaveBeenCalled();
      fireEvent.submit(container.querySelector('form')!);
      await waitFakeTimer();

      const inputNode = document.getElementById('test');
      expect(scrollIntoView).toHaveBeenCalledWith(inputNode, {
        block: 'center',
        scrollMode: 'if-needed',
      });
      expect(onFinishFailed).toHaveBeenCalled();
    });

    it('not set, form set object', async () => {
      (scrollIntoView as any).mockImplementation(() => {});
      const onFinishFailed = jest.fn();

      const { container } = render(
        <ConfigProvider>
          <Form scrollToFirstError={{ block: 'center' }} onFinishFailed={onFinishFailed}>
            <Form.Item name="test" rules={[{ required: true }]}>
              <input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );

      expect(scrollIntoView).not.toHaveBeenCalled();
      fireEvent.submit(container.querySelector('form')!);
      await waitFakeTimer();

      const inputNode = document.getElementById('test');
      expect(scrollIntoView).toHaveBeenCalledWith(inputNode, {
        block: 'center',
        scrollMode: 'if-needed',
      });
      expect(onFinishFailed).toHaveBeenCalled();
    });

    it('set object, form set false', async () => {
      (scrollIntoView as any).mockImplementation(() => {});
      const onFinishFailed = jest.fn();

      const { container } = render(
        <ConfigProvider form={{ scrollToFirstError: { block: 'center' } }}>
          <Form scrollToFirstError={false} onFinishFailed={onFinishFailed}>
            <Form.Item name="test" rules={[{ required: true }]}>
              <input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </ConfigProvider>,
      );

      expect(scrollIntoView).not.toHaveBeenCalled();
      fireEvent.submit(container.querySelector('form')!);
      await waitFakeTimer();

      expect(scrollIntoView).not.toHaveBeenCalled();
      expect(onFinishFailed).toHaveBeenCalled();
    });
  });
});